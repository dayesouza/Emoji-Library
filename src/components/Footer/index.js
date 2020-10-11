import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto footer text-center">
      <span>
        {/* eslint-disable-next-line */}
        {year} - Dayenne Souza
        <a
          aria-label="My Website"
          rel="noopener noreferrer"
          href="http://dayesouza.github.io/"
          target="_blank"
        >
          <FontAwesomeIcon className="mx-2" icon="globe" />
        </a>
      </span>
    </div>
  );
}
