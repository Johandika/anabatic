import React from "react";

export default function UserPage() {
  return (
    <div>
      <form className="d-flex justify-content-center align-items-center ms-sm-5">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-3">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 2.00077C4.93913 2.00077 3.92172 2.42219 3.17157 3.17234C2.42143 3.92248 2 4.9399 2 6.00077C2 7.06163 2.42143 8.07905 3.17157 8.82919C3.92172 9.57934 4.93913 10.0008 6 10.0008C7.06087 10.0008 8.07828 9.57934 8.82843 8.82919C9.57857 8.07905 10 7.06163 10 6.00077C10 4.9399 9.57857 3.92248 8.82843 3.17234C8.07828 2.42219 7.06087 2.00077 6 2.00077ZM1.13461e-07 6.00077C-0.00012039 5.05647 0.222642 4.12548 0.650171 3.28351C1.0777 2.44154 1.69792 1.71236 2.4604 1.15529C3.22287 0.598219 4.10606 0.228978 5.03815 0.0775993C5.97023 -0.0737798 6.92488 -0.00302249 7.82446 0.284117C8.72404 0.571256 9.54315 1.06667 10.2152 1.73006C10.8872 2.39346 11.3931 3.2061 11.6919 4.1019C11.9906 4.9977 12.0737 5.95136 11.9343 6.88532C11.795 7.81928 11.4372 8.70716 10.89 9.47677L15.707 14.2938C15.8892 14.4824 15.99 14.735 15.9877 14.9972C15.9854 15.2594 15.8802 15.5102 15.6948 15.6956C15.5094 15.881 15.2586 15.9862 14.9964 15.9884C14.7342 15.9907 14.4816 15.8899 14.293 15.7078L9.477 10.8918C8.57936 11.53 7.52335 11.9089 6.42468 11.9869C5.326 12.0648 4.22707 11.8389 3.2483 11.3337C2.26953 10.8286 1.44869 10.0638 0.875723 9.12312C0.30276 8.18244 -0.000214051 7.1022 1.13461e-07 6.00077Z"
            fill="#B0BABF"
          />
        </svg>
        <input type="text" class="form-control border-none" aria-describedby="emailHelp" placeholder="Search..." />
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-3">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 6C7.79565 6 8.55871 5.68393 9.12132 5.12132C9.68393 4.55871 10 3.79565 10 3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3C4 3.79565 4.31607 4.55871 4.87868 5.12132C5.44129 5.68393 6.20435 6 7 6ZM0 15C-1.36979e-08 14.0807 0.18106 13.1705 0.532843 12.3212C0.884626 11.4719 1.40024 10.7003 2.05025 10.0503C2.70026 9.40024 3.47194 8.88463 4.32122 8.53284C5.1705 8.18106 6.08075 8 7 8C7.91925 8 8.8295 8.18106 9.67878 8.53284C10.5281 8.88463 11.2997 9.40024 11.9497 10.0503C12.5998 10.7003 13.1154 11.4719 13.4672 12.3212C13.8189 13.1705 14 14.0807 14 15H0Z"
            fill="#B0BABF"
          />
        </svg>
      </form>
      <hr />
      <div className="row ms-sm-5 mt-4 mb-2">
        <div className="col-12 d-flex align-items-center">
          <h2 className="fw-bold me-auto">List to be review</h2>
          <button type="button" className="btn btn-primary btn-sm">
            + New Upload
          </button>
        </div>
      </div>
      <div className="row ms-sm-5">
        <ul class="nav nav-underline">
          <li class="nav-item">
            <a class="nav-link text-dark fw-semibold " aria-current="page" href="#">
              Succeeded
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              Refunded
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              Uncaptured
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">
              All
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="row ms-sm-5 ">
        <ul class="nav nav-underline">
          <li class="nav-item col-4">
            <a class="nav-link abu-abu" aria-current="page" href="#">
              DESCRIPTION
            </a>
          </li>

          <li class="nav-item col-4">
            <a class="nav-link abu-abu" href="#">
              UPDATED BY
            </a>
          </li>
          <li class="nav-item col-4">
            <a class="nav-link abu-abu" href="#">
              LAST UPLOADED
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
