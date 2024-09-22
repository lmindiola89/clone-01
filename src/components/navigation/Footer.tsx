import React from "react";

function Footer() {
  return (
    <footer className="text-[#ffffffb3] max-w-[1212px] mx-auto px-10 lg:px-[80px] py-10">
      <p>
        Questions? Call{" "}
        <a href="tel:01 800 917 1563" className="underline">
          01 800 917 1563
        </a>
      </p>
      <nav className="py-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <li>
            <a
              href="https://help.netflix.com/support/412"
              className="underline"
            >
              FAQ
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com" className="underline">
              Help Center
            </a>
          </li>
          <li>
            <a href="/youraccount" className="underline">
              Account
            </a>
          </li>
          <li>
            <a href="https://media.netflix.com/" className="underline">
              Media Center
            </a>
          </li>
          <li>
            <a href="http://ir.netflix.com/" className="underline">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="https://jobs.netflix.com/jobs" className="underline">
              Jobs
            </a>
          </li>
          <li>
            <a href="/redeem" className="underline">
              Redeem Gift Cards
            </a>
          </li>
          <li>
            <a href="/gift-cards" className="underline">
              Buy Gift Cards
            </a>
          </li>
          <li>
            <a href="/watch" className="underline">
              Ways to Watch
            </a>
          </li>
          <li>
            <a
              href="https://help.netflix.com/legal/termsofuse"
              className="underline"
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              href="https://help.netflix.com/legal/privacy"
              className="underline"
            >
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Cookie Preferences
            </a>
          </li>
          <li>
            <a
              href="https://help.netflix.com/legal/corpinfo"
              className="underline"
            >
              Corporate Information
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com/contactus" className="underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="https://fast.com" className="underline">
              Speed Test
            </a>
          </li>
          <li>
            <a
              href="https://help.netflix.com/legal/notices"
              className="underline"
            >
              Legal Notices
            </a>
          </li>
          <li>
            <a
              href="https://www.netflix.com/co-en/browse/genre/839338"
              className="underline"
            >
              Only on Netflix
            </a>
          </li>
        </ul>
      </nav>
      <p>Netflix Colombia</p>
    </footer>
  );
}

export default Footer;
