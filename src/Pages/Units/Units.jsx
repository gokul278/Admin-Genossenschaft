import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
import { Divider } from "primereact/divider";
import { FileUpload } from "primereact/fileupload";
import imagecontent from "../../assets/IMG/HOME/Heading Content.png";
import ImageViewDelete from "../../Components/ImagesView&Delete/ImageView&Delete";
import TextInput from "../../Components/Inputs/TextInput";

const Units = () => {
  const [editPanel, setEditPanel] = useState(false);

  const imgtag = () => {
    return (
      <img
        src={imagecontent}
        className="w-[100px] h-[100px] object-cover rounded"
        alt=""
      />
    );
  };

  const [data, setData] = useState([
    {
      id: 1,
      img: "",
      name: "Wohneinheit mit 2 Mansarden",
      type: "Apartment",
      bed: 2,
      area: "10.5 m2",
    },
  ]);

  const EditBtn = (rowData) => {
    return (
      <Button
        label="Edit"
        onClick={() => {
          setEditPanel(true);
          console.log(rowData);
        }}
      />
    );
  };

  const confirm2 = (event) => {
    console.log("Hello");

    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this record?",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
    });
  };

  const accept = () => {
    console.log("Accepts");
  };

  const DeleteBtn = (rowData) => {
    return <Button label="Delete" onClick={confirm2} severity="secondary" />;
  };

  return (
    <div className="w-[95%] h-[95vh] flex-col bg-[#fff] p-10 rounded-md flex flex-wrap justify-start items-center overflow-y-auto">
      <ConfirmPopup />
      <Sidebar
        className="w-[60%]"
        visible={editPanel}
        position="right"
        onHide={() => setEditPanel(false)}
      >
        <h2 className="font-mont text-[20px] font-bold">Edit Property</h2>
        <Divider />

        <div className="w-[100%] my-10 flex justify-center">
          <div className="w-[92%] flex flex-wrap gap-5">
            <ImageViewDelete />
            <ImageViewDelete />
            <ImageViewDelete />
            <ImageViewDelete />
            <ImageViewDelete />
            <ImageViewDelete />
            <ImageViewDelete />
            <ImageViewDelete />
            <ImageViewDelete />
          </div>
        </div>

        <div className="w-[100%] flex justify-center">
          <div className="w-[92%]">
            <FileUpload
              name="demo[]"
              url={"/api/upload"}
              multiple
              accept="image/*"
              maxFileSize={1000000}
              emptyTemplate={
                <p className="m-0">Drag and drop files to here to upload.</p>
              }
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[90%] my-10 flex flex-col gap-5">
            <div className="w-[100%] flex justify-between">
              <div className="w-[48%]">
                <TextInput
                  label={"Name"}
                  name={"name"}
                  id={"name"}
                  type={"text"}
                />
              </div>
              <div className="w-[48%]">
                <TextInput
                  label={"Type"}
                  name={"type"}
                  id={"type"}
                  type={"text"}
                />
              </div>
            </div>

            <div className="w-[100%] flex justify-between">
              <div className="w-[48%]">
                <TextInput
                  label={"Bed"}
                  name={"name"}
                  id={"name"}
                  type={"number"}
                />
              </div>
              <div className="w-[48%]">
                <TextInput
                  label={"Area"}
                  name={"type"}
                  id={"type"}
                  type={"number"}
                />
              </div>
            </div>
          </div>
        </div>
      </Sidebar>

      <div className="w-[100%]">
        <h1 className="font-mont text-[20px] font-bold mb-5">Units</h1>
      </div>

      <div className="w-[100%] mb-10">
        <Button
          label="Add Unit"
          severity="secondary"
          onClick={() => {
            setEditPanel(true);
          }}
        />
      </div>

      <DataTable
        value={data}
        paginator
        rows={10}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]}
        emptyMessage="No Properties found."
        sortField="userId"
        sortOrder={-1}
        filters=""
        className="w-[100%] border rounded-sm font-mont font-semibold"
      >
        <Column frozen sortable field="id" header="S.No"></Column>
        <Column field="img" body={imgtag} header="Image"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="type" header="Type"></Column>
        <Column field="bed" header="Bed"></Column>
        <Column field="area" header="Area"></Column>
        <Column field="id" body={EditBtn} header="Edit"></Column>
        <Column field="id" body={DeleteBtn} header="Delete"></Column>
      </DataTable>
    </div>
  );
};

export default Units;
