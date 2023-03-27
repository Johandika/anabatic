import React from "react";

export default function UploadPage() {
  return (
    <div>
      <div className="row ms-sm-5 mt-4 mb-2">
        <div className="col-12 d-flex align-items-center">
          <h2 className="fw-bold me-auto">Upload to Process</h2>
        </div>
      </div>
      <hr />
      <div className="ms-sm-5">
        <div className="mb-3 row">
          <label for="description" className="col-sm-2 col-form-label">
            Description :
          </label>
          <div className="col-sm-6">
            <input type="textarea" className="form-control" id="description" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="formFile" className="col-sm-2 col-form-label">
            Upload File :
          </label>
          <div className="col-sm-6">
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </div>
  );
}
