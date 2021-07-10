const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer class='container pt-5 my-5 text-muted border-top text-center'>
      airSpace &middot; &copy; {currentYear}
    </footer>
  )
}

export default Footer
