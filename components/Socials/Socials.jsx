import React from "react";
import styles from "./Socials.module.scss";
import Title from "../typography/Title/Title";
import Link from "next/link";

const Socials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title__Container}>
        <Title text={"Follow Louby Lou"} />
      </div>
      <div className={styles.socials__Container}>
        <Link
          aria-label="Facebook"
          href={"https://www.facebook.com/loubylouclown/?locale=en_GB"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="28"
            viewBox="0 0 24 28"
          >
            <path
              fill="#FFF"
              d="M22.672 2C23.406 2 24 2.594 24 3.328v21.344c0 .734-.594 1.328-1.328 1.328h-6.109v-9.297h3.109l.469-3.625h-3.578v-2.312c0-1.047.281-1.75 1.797-1.75L20.266 9V5.766c-.328-.047-1.469-.141-2.781-.141-2.766 0-4.672 1.687-4.672 4.781v2.672H9.688v3.625h3.125V26H1.329a1.327 1.327 0 0 1-1.328-1.328V3.328C.001 2.594.595 2 1.329 2h21.344z"
            />
          </svg>
        </Link>

        <Link
          aria-label="Twitter"
          href={"https://twitter.com/loubylouclown?lang=en"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="28"
            viewBox="0 0 26 28"
          >
            <path
              fill="#FFF"
              d="M25.312 6.375a10.85 10.85 0 0 1-2.531 2.609c.016.219.016.438.016.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-.828-7.75-2.266.406.047.797.063 1.219.063 2.359 0 4.531-.797 6.266-2.156a5.056 5.056 0 0 1-4.719-3.5c.313.047.625.078.953.078.453 0 .906-.063 1.328-.172a5.048 5.048 0 0 1-4.047-4.953v-.063a5.093 5.093 0 0 0 2.281.641 5.044 5.044 0 0 1-2.25-4.203c0-.938.25-1.797.688-2.547a14.344 14.344 0 0 0 10.406 5.281 5.708 5.708 0 0 1-.125-1.156 5.045 5.045 0 0 1 5.047-5.047 5.03 5.03 0 0 1 3.687 1.594 9.943 9.943 0 0 0 3.203-1.219 5.032 5.032 0 0 1-2.219 2.781c1.016-.109 2-.391 2.906-.781z"
            />
          </svg>
        </Link>

        <Link
          aria-label="Instagram"
          href={"https://www.instagram.com/loubylouclown/?hl=en"}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="28"
            viewBox="0 0 24 28"
          >
            <path
              fill="#FFF"
              d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zm2.156 0c0 3.406-2.75 6.156-6.156 6.156S5.844 17.406 5.844 14 8.594 7.844 12 7.844s6.156 2.75 6.156 6.156zm1.688-6.406c0 .797-.641 1.437-1.437 1.437S16.97 8.39 16.97 7.594s.641-1.437 1.437-1.437 1.437.641 1.437 1.437zM12 4.156c-1.75 0-5.5-.141-7.078.484-.547.219-.953.484-1.375.906s-.688.828-.906 1.375c-.625 1.578-.484 5.328-.484 7.078s-.141 5.5.484 7.078c.219.547.484.953.906 1.375s.828.688 1.375.906c1.578.625 5.328.484 7.078.484s5.5.141 7.078-.484c.547-.219.953-.484 1.375-.906s.688-.828.906-1.375c.625-1.578.484-5.328.484-7.078s.141-5.5-.484-7.078c-.219-.547-.484-.953-.906-1.375s-.828-.688-1.375-.906C17.5 4.015 13.75 4.156 12 4.156zM24 14c0 1.656.016 3.297-.078 4.953-.094 1.922-.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656.094-3.297.078-4.953.078s-3.297.016-4.953-.078c-1.922-.094-3.625-.531-5.031-1.937S.173 20.875.08 18.953C-.014 17.297.002 15.656.002 14s-.016-3.297.078-4.953c.094-1.922.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-.094 3.297-.078 4.953-.078s3.297-.016 4.953.078c1.922.094 3.625.531 5.031 1.937s1.844 3.109 1.937 5.031C24.016 10.703 24 12.344 24 14z"
            />
          </svg>
        </Link>

        <Link
          aria-label="Linkedin"
          href={"https://www.linkedin.com/in/lucy-wilkinson-clown/"}
        >
          <svg
            fill="#ffffff"
            height="25.05px"
            width="25.05px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 310 310"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="XMLID_801_">
                {" "}
                <path
                  id="XMLID_802_"
                  d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                ></path>{" "}
                <path
                  id="XMLID_803_"
                  d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                ></path>{" "}
                <path
                  id="XMLID_804_"
                  d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </Link>

        <Link
          aria-label="Youtube"
          href={"https://www.youtube.com/channel/UC_vpXmFBDFH2t7OONKzcwKA"}
        >
          <svg
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 461.001 461.001"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#ffffff" }}
                  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
