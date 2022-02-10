import axios from 'axios'
export const sendEmail = async (email, message, name, nameSender, emailCC, start, setSuccessEmail, setListEmailSending, mailData = []) => {
  const url = 'https://apis.shortms.com/api/v1/email'
  // const url = 'http://192.168.1.14:9000/api/v1/email'
  const lengthMail = email.length
  if (Array.isArray(email) && start <= lengthMail - 1) {
    // console.log(start)
    // console.log(email[start])
    const requestBody = {
      name: nameSender,
      email: email[start],
      html: message,
      subject: name,
      emailCC: emailCC
    }
    await axios.post(url, requestBody, {}).then((response) => {
      mailData.push({ email: email[start], status: true })
      setListEmailSending(mailData)
      console.log({ email: email[start], status: true })
      setTimeout(() => {
        return sendEmail(email, message, name, nameSender, emailCC, start + 1, setSuccessEmail, setListEmailSending, mailData)
      }, 1000)
    }).catch((err) => {
      console.log(err)
      mailData.push({ email: email[start], status: false })
      setListEmailSending(mailData)
      console.log({ email: email[start], status: false })
      setTimeout(() => {
        return sendEmail(email, message, name, nameSender, emailCC, start + 1, setSuccessEmail, setListEmailSending, mailData)
      }, 1000)
    })
  } else {
    setSuccessEmail(true)
    return 'success'
  }
}
