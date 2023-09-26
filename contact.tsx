// import { useRef, RefObject } from 'react';
// import emailjs from '@emailjs/browser'


// export const ContactUs = () => {
//   const form: RefObject<HTMLFormElement> = useRef();

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };



import { useRef } from 'react';
import emailjs from "@emailjs/browser";
// import './index.css';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5946ay9', 'template_2pphbzh', form.current!, '94jn2RJxPMZJ33JPZ')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    // <form >
    //   <label>Name</label>
    //   <input type="text"/>
    //   <label>Email</label>
    //   <input type="email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>


    <form ref={form} onSubmit={sendEmail}>
    <div>
        <input type="text"   placeholder="Name"/>
        
        {/* <label>Name</label> */}
    </div>
    <div>
        <input type="email" name="user_email"  placeholder="Email"/>
        {/* <label>Email</label> */}
    </div>
    <div>
        <input type="text" name="message" placeholder="Message"/>
        {/* <label>Message</label> */}
    </div>

   <div className="sub-cont">
   <input className='subbtn' type="submit" value="Send" />
   </div>
    </form>
  );
};

export default ContactUs
