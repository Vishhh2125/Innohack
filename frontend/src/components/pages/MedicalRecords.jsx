// This file uses simple self-contained Button and Card components instead of external UI libraries, for portability and ease of use.
import React, { useState } from 'react';
import { FileText, ChevronRight, Inbox, Plus } from 'lucide-react';

// Simple Button component
const Button = ({ children, onClick, className = '', variant = 'solid', ...props }) => {
  const base =
    variant === 'outline'
      ? 'border border-primary text-primary bg-transparent hover:bg-primary/10'
      : 'bg-primary text-primary-foreground hover:bg-primary/90';
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center font-medium ${base} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple Card component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 ${className}`}>{children}</div>
);

// Redesigned Modal for adding a record
const AddRecordModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return;
    onSave({ title, date, fileName });
    setTitle('');
    setDate('');
    setFileName('');
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Add Medical Record</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Date</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">File Name (optional)</label>
            <input
              type="text"
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="flex justify-end space-x-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const MedicalRecords = () => {
  const [records, setRecords] = useState([
    {
      id: '1',
      title: 'Annual Physical Exam 2024',
      date: '2024-07-15',
      fileName: 'physical-exam-2024.pdf'
    },
    {
      id: '2',
      title: 'Blood Test Results',
      date: '2024-06-08',
      fileName: 'blood-test-june.pdf'
    },
    {
      id: '3',
      title: 'X-Ray Chest Scan',
      date: '2024-05-22',
      fileName: 'chest-xray-may.jpg'
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddRecord = (newRecord) => {
    const record = {
      ...newRecord,
      id: Date.now().toString()
    };
    setRecords(prev => [record, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-light py-10 px-2 md:px-0">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-card rounded-2xl shadow p-6 border border-gray-100">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">My Medical Records</h1>
            <p className="text-muted-foreground text-base">Securely store and manage your health documents</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="mt-2 md:mt-0 text-base px-6 py-2">
            <Plus className="w-5 h-5 mr-2" />
            Add Record
          </Button>
        </div>
      </div>

      {/* Records List */}
      <div className="max-w-4xl mx-auto">
        {records.length === 0 ? (
          // Empty State
          <Card className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-muted/50 rounded-full p-8 mb-6">
              <Inbox className="w-16 h-16 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No Records Found
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Click "Add Record" to store your first medical document.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              className="text-base px-6 py-2"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Your First Record
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {records.map((record) => (
              <Card key={record.id} className="flex flex-col md:flex-row items-center md:items-stretch p-0 overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center bg-primary/10 md:w-32 w-full py-6 md:py-0">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1 px-6 py-4 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {record.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span>Date: <span className="font-medium text-foreground">{record.date}</span></span>
                    {record.fileName && (
                      <span>File: <span className="font-medium text-foreground">{record.fileName}</span></span>
                    )}
                  </div>
                </div>
                <div className="flex items-center px-6 md:px-4 py-4 md:py-0">
                  <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <AddRecordModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddRecord}
      />
    </div>
  );
};

export default MedicalRecords;
