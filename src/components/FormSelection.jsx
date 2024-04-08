import React,{useState} from "react";
import "./componentStyles/FormSelection.css";
import { Link } from "react-router-dom"
import { Button, Modal, Select, Label, TextInput, Datepicker } from "flowbite-react";
const FormSelection = () => {
  const [ openModal, setOpenModal ] = useState(false)
  const [ inspectorName, setInspectorName ] = useState("")

  function onCloseModal() {
    setOpenModal(false);
    setInspectorName('');
  }
  return (
    <div className="flex flex-col w-1/4 mx-auto gap-2">
      <h2>Select your location</h2>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <Button onClick={() => setOpenModal(true)}>Loc#1</Button>
        <Button onClick={() => setOpenModal(true)}>Loc#1</Button>
        <Button onClick={() => setOpenModal(true)}>Loc#1</Button>
        <Button onClick={() => setOpenModal(true)}>Loc#1</Button>
        <Button onClick={() => setOpenModal(true)}>Loc#1</Button>
        <Button onClick={() => setOpenModal(true)}>Loc#1</Button>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Area - Form Selection</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name" />
              </div>
              <TextInput
                id="text"
                placeholder="First Name"
                value={inspectorName}
                onChange={(event) => setInspectorName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Last Name" />
              </div>
              <TextInput id="lastname" placeholder="Last Name" type="text" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Datepicker
                  weekStart={1} // Monday
                />
                <Label htmlFor="remember">Select Shift</Label>
                <Select id="shift" >
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                </Select>
              </div>
            </div>
            <div className="w-full">
              <Link to="/location-1-page"><Button onClick={onCloseModal}>Assign Location</Button></Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    
  );
};

export default FormSelection;
