import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Welcome to <strong className="purple">Emoease AI</strong>, your trusted companion in emotional support and stress relief. We are dedicated to providing a unique AI-powered chat experience designed to help you navigate life's challenges with ease and comfort. Our mission is to create a simple, user-friendly platform that connects you with an AI companion tailored to your emotional needs.
At <strong className="purple">Emoease AI</strong>, we understand the importance of mental well-being. Our innovative service allows you to choose from various character avatars, voice types, and emotional tones, ensuring a personalized and supportive experience. Whether you need a friend, a family member, a doctor, or even a cute pet to talk to, our AI is here to listen and provide the comfort you seek.
Our team is passionate about leveraging the power of AI to make a positive impact on people's lives. We believe that everyone deserves access to a supportive companion who can help alleviate stress and enhance overall happiness. Join us on this journey towards better mental health and discover the difference our AI chat service can make.
<<<<<<< HEAD
Thank you for choosing <strong className="purple">Emoease AI</strong>. We're here to help you find your inner peace and boost your mood, one conversation at a time...
=======
Thank you for choosing <strong className="purple">Emoease AI</strong>. We're here to help you find your inner peace and boost your mood, one conversation at a time.
>>>>>>> origin/main
          </p>
          <footer className="blockquote-footer">Tao</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
