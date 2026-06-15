import Contact from '@/components/Contact'


export default function ContactPage() {
  const pageTitle = 'Contact Us'

  return (
    <div>
      <div className="contact-header">
        <h1>Contact Us{pageTitle}</h1>
    
      </div>
        <Contact />
    </div>
  )
}
