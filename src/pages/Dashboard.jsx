import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container-fluid bg-white">
      <div className="row w-100 min-vh-100 d-flex sidebar-sticky ">
        {/* <!-- Sidebar --> */}
        <aside className="col-md-3 col-4 bg-sidebar pt-4 " id="navbarNav">
          {/* Logo */}
          <div className="text-center mb-4">
            <a className="navbar-brand " href="#">
              <img src="\img\logo-ikimodal.png" alt="ikimmodal logo"></img>
            </a>
          </div>

          {/* Menu */}
          <div class="mt-2">
            <ul class="nav nav-pills flex-column mb-auto">
              {/* Home */}
              <Link to={"/"} className="text-decoration-none">
                <li>
                  <a href="#" class="nav-link text-dark ">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icontext-nonactive mx-2">
                      <path d="M8.70692 0.293031C8.51939 0.105559 8.26508 0.000244141 7.99992 0.000244141C7.73475 0.000244141 7.48045 0.105559 7.29292 0.293031L0.292919 7.29303C0.110761 7.48163 0.00996641 7.73423 0.0122448 7.99643C0.0145233 8.25863 0.119692 8.50944 0.3051 8.69485C0.490508 8.88026 0.741321 8.98543 1.00352 8.9877C1.26571 8.98998 1.51832 8.88919 1.70692 8.70703L1.99992 8.41403V15C1.99992 15.2652 2.10528 15.5196 2.29281 15.7071C2.48035 15.8947 2.7347 16 2.99992 16H4.99992C5.26514 16 5.51949 15.8947 5.70703 15.7071C5.89456 15.5196 5.99992 15.2652 5.99992 15V13C5.99992 12.7348 6.10528 12.4805 6.29281 12.2929C6.48035 12.1054 6.7347 12 6.99992 12H8.99992C9.26514 12 9.51949 12.1054 9.70703 12.2929C9.89456 12.4805 9.99992 12.7348 9.99992 13V15C9.99992 15.2652 10.1053 15.5196 10.2928 15.7071C10.4803 15.8947 10.7347 16 10.9999 16H12.9999C13.2651 16 13.5195 15.8947 13.707 15.7071C13.8946 15.5196 13.9999 15.2652 13.9999 15V8.41403L14.2929 8.70703C14.4815 8.88919 14.7341 8.98998 14.9963 8.9877C15.2585 8.98543 15.5093 8.88026 15.6947 8.69485C15.8801 8.50944 15.9853 8.25863 15.9876 7.99643C15.9899 7.73423 15.8891 7.48163 15.7069 7.29303L8.70692 0.293031Z" />
                    </svg>
                    Home/ Overview
                  </a>
                </li>
              </Link>
              {/* Financial Report */}
              <Link to={"/list"} className="text-decoration-none">
                <li class="nav-item">
                  <a
                    href="#"
                    class="bg-sidebar-active nav-link active d-flex align-items-center icontext-active"
                    aria-current="page">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="
                    icontext-active mx-2">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0 6.53043 0.210714 7.03914 0.585786 7.41421C0.960859 7.78929 1.46957 8 2 8V2H12C12 1.46957 11.7893 0.960859 11.4142 0.585786C11.0391 0.210714 10.5304 0 10 0H2ZM4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H6C5.46957 12 4.96086 11.7893 4.58579 11.4142C4.21071 11.0391 4 10.5304 4 10V6ZM10 10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8C12 7.46957 11.7893 6.96086 11.4142 6.58579C11.0391 6.21071 10.5304 6 10 6C9.46957 6 8.96086 6.21071 8.58579 6.58579C8.21071 6.96086 8 7.46957 8 8C8 8.53043 8.21071 9.03914 8.58579 9.41421C8.96086 9.78929 9.46957 10 10 10Z"
                      />
                    </svg>
                    Financial Report
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </aside>

        {/* <!-- Main content --> */}
        <div className="col-md-9 col-sm-8 col-12 pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
