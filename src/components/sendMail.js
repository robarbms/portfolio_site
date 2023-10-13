/**
 * Helper function for sending 
 * @param {*} evnt 
 */
export default function sendMail (evnt) {
    evnt.preventDefault();
  
    emailjs.sendForm('service_8ej6il4', 'template_0q3sujl', this.form.current, 'gDDSsv52CVL0p2sKS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    this.form.current.reset();
    this.setState({
        mailSent: true
    });
    setTimeout(() => {
        this.setState({
            mailSent: false
        });
    }, 3000);
}