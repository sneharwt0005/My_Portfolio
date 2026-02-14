function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center py-4 mt-10">
      <p className="text-sm mb-1">
        &copy; {new Date().getFullYear()} Sneha Rawat. All rights reserved.
      </p>
      <p className="text-sm">
        Built with ❤️ using React
      </p>
    </footer>
  );
}

export default Footer;
