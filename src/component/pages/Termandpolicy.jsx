import React from "react";
import "./Termandpolicy";

const Termandpolicy = () => {
  return (
  <div className="term-and-policy">
    <div style={styles.container}>
      
      <h2>Terms and Conditions</h2>
      <p>
        Welcome to Sodia! These terms and conditions outline the rules and regulations for the use of Sodia's website, located at www.sodia.com.
      </p>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Sodia's website if you do not agree to take all of the terms and conditions stated on this page.
      </p>
      <h5>You must not</h5>
      <ul>
        <li>Republish material from Sodia</li>
        <li>Sell, rent or sub-license material from Sodia</li>
        <li>Reproduce, duplicate or copy material from Sodia</li>
        <li>Redistribute content from Sodia</li>
      </ul>

      
      <h3>Cookies</h3>
      <p>
        We employ the use of cookies. By accessing Sodia's website, you agreed to use cookies in agreement with the Sodia's Privacy Policy.
      </p>
      
      <h3>License</h3>
      <p>
        Unless otherwise stated, Sodia and/or its licensors own the intellectual property rights for all material on Sodia. All intellectual property rights are reserved. You may access this from Sodia for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      
      <h3>Restrictions</h3>
      <p>
        You are specifically restricted from all of the following:
      </p>
    
      <ul>
        <li>publishing any Sodia material in any other media</li>
        <li>selling, sublicensing, and/or otherwise commercializing any Sodia material</li>
        <li>publicly performing and/or showing any Sodia material</li>
        <li>using this website in any way that is or may be damaging to this website</li>
        <li>using this website in any way that impacts user access to this website</li>
        <li>using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity</li>
      </ul>
      
      
      <h3>Disclaimer</h3>
      <p>
        To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
      </p>
      <ul>
        <li>limit or exclude our or your liability for death or personal injury</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </ul>
      
      <h3>Severability</h3>
      <p>
        If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
      </p>
      
      <p>
        These terms and conditions constitute the entire agreement between Sodia and you in relation to your use of this website and supersede all prior agreements and understandings.
      </p>
      
      <h3>Privacy Policy</h3>
      <p>
        For more information about how we collect, use, and disclose your information, please read our Privacy Policy.
      </p>
      <h3>Contact Information</h3>
      <p>If you have any questions or concerns regarding our terms and policies, please feel free to contact us at:</p>
      <span>Sodia@media.com</span>

      </div>
    </div>
    
    );
  };

  const styles = {
    container: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'purple',
        border: '1px solid #ccc',
        borderRadius: '8px',
        color: 'white',
        fontsize: '20px',

    },
    code: {
        fontFamily: 'Courier New, Courier, monospace',
        fontSize: '14px',
        color: '#333',
        // whiteSpace: 'pre-wrap',


        
    },
};
 

  

export default Termandpolicy;
