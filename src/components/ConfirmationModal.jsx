/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm, message }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
          <p className="mb-4">{message}</p>
          <div className="flex justify-end">
            <Button type="button" variant="secondary" onClick={onRequestClose}>
              No
            </Button>
            <Button type="button" variant="destructive" onClick={onConfirm}>
              Yes
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmationModal;
