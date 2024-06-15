const Footer = () => {
  return (
    <footer className="h-[60px] bg-white border-t-4 flex justify-center items-center">
      <p className="text-xl capitalize font-bold text-slate-600">
        copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;