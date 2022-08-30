function Footer() {
  return (
    <footer class="p-3 bg-white rounded-lg shadow md:px-6 md:py-6 dark:bg-gray-900">
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://ksdevware.com"
          class="hover:underline text-primary-color"
          target="_blank"
          rel="noreferrer"
        >
          KS Devware
        </a>
        .@CopyRight by!{" "}
        <a
          href="https://www.linkedin.com/in/noyon-islam-095342237/"
          class="hover:underline text-primary-color"
          target="_blank"
          rel="noreferrer"
        >
          Noyon Islam
        </a>
        .
      </span>
    </footer>
  );
}

export default Footer;
