import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log('=== API ROUTE CALLED ===');
  
  try {
    // Check if API key exists
    console.log('Checking API key...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key preview:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'NOT FOUND');
    
    // Parse request body
    console.log('Parsing request body...');
    const body = await request.json();
    console.log('Request body received:', body);
    
    const { name, email, message } = body;
    console.log('Extracted fields:', { name, email, message: message?.substring(0, 50) });

    // Validate inputs
    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing fields');
      console.log('Missing:', { 
        name: !name, 
        email: !email, 
        message: !message 
      });
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Basic spam protection
    if (message.length < 10) {
      console.log('❌ Message too short:', message.length);
      return NextResponse.json(
        { success: false, error: 'Message is too short (minimum 10 characters)' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      console.log('❌ Message too long:', message.length);
      return NextResponse.json(
        { success: false, error: 'Message is too long (maximum 5000 characters)' },
        { status: 400 }
      );
    }

    console.log('✅ All validations passed');
    console.log('Attempting to send email with Resend...');

    // Send email
    const data = await resend.emails.send({
      from: 'Aditya Portfolio <onboarding@resend.dev>',
      to: ['aditya.cloud.expert@gmail.com'],
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('Resend response:', data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: data.id
    });

  } catch (error) {
    console.error('❌ ERROR CAUGHT:');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email',
        details: error.message
      },
      { status: 500 }
    );
  }
}