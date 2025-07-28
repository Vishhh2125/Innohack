import { useState } from "react";
import { Star, Clock, MapPin, Calendar, Filter } from "lucide-react";

const doctors = [
  {
    id: "1",
    name: "Dr. Emily Carter",
    specialty: "Cardiologist",
    experience: 12,
    rating: 4.9,
    reviews: 324,
    nextAvailable: "Today 2:30 PM",
    location: "Downtown Medical Center",
    image: "👩‍⚕️",
    languages: ["English", "Spanish"]
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    experience: 8,
    rating: 4.8,
    reviews: 256,
    nextAvailable: "Tomorrow 10:00 AM",
    location: "Skin Care Clinic",
    image: "👨‍⚕️",
    languages: ["English", "Mandarin"]
  },
  {
    id: "3",
    name: "Dr. Sarah Johnson",
    specialty: "Neurologist",
    experience: 15,
    rating: 4.9,
    reviews: 412,
    nextAvailable: "Friday 3:15 PM",
    location: "Neuro Wellness Center",
    image: "👩‍⚕️",
    languages: ["English", "French"]
  },
  {
    id: "4",
    name: "Dr. James Rodriguez",
    specialty: "Orthopedist",
    experience: 10,
    rating: 4.7,
    reviews: 189,
    nextAvailable: "Monday 9:00 AM",
    location: "Sports Medicine Institute",
    image: "👨‍⚕️",
    languages: ["English", "Spanish"]
  }
];

export default function Appointments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    const matchesLanguage = !selectedLanguage || doctor.languages.includes(selectedLanguage);
    return matchesSearch && matchesSpecialty && matchesLanguage;
  });

  const specialties = [...new Set(doctors.map(doc => doc.specialty))];
  const languages = [...new Set(doctors.flatMap(doc => doc.languages))];

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header */}
      <div className="bg-card border-b border-border px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">Book an Appointment</h1>
          <p className="text-muted-foreground">Find and schedule appointments with qualified healthcare professionals</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            {/* Card (was: <Card>) */}
            <div className="card-gentle bg-white rounded-lg shadow p-4 mb-4">
              {/* CardHeader (was: <CardHeader>) */}
              <div className="mb-4">
                {/* CardTitle (was: <CardTitle>) */}
                <div className="flex items-center space-x-2 text-lg font-semibold mb-2">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </div>
              </div>
              {/* CardContent (was: <CardContent>) */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Search Doctors
                  </label>
                  {/* Input (was: <Input>) */}
                  <input
                    placeholder="Search by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-lg border border-border px-3 py-2 w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Specialty
                  </label>
                  {/* Select (was: <Select>) */}
                  <select
                    value={selectedSpecialty}
                    onChange={e => setSelectedSpecialty(e.target.value)}
                    className="rounded-lg border border-border px-3 py-2 w-full"
                  >
                    <option value="">All Specialties</option>
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Language
                  </label>
                  {/* Select (was: <Select>) */}
                  <select
                    value={selectedLanguage}
                    onChange={e => setSelectedLanguage(e.target.value)}
                    className="rounded-lg border border-border px-3 py-2 w-full"
                  >
                    <option value="">All Languages</option>
                    {languages.map(language => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors List */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredDoctors.map((doctor) => (
                // Card (was: <Card>)
                <div key={doctor.id} className="card-gentle bg-white rounded-lg shadow p-6">
                  {/* CardContent (was: <CardContent>) */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-secondary-light rounded-full flex items-center justify-center text-2xl">
                        {doctor.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-secondary font-medium mb-2">
                          {doctor.specialty}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{doctor.rating}</span>
                            <span>({doctor.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{doctor.experience} years experience</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{doctor.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {/* Badge (was: <Badge>) */}
                          {doctor.languages.map(language => (
                            <span key={language} className="inline-block bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-3">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Next Available</p>
                        <p className="font-semibold text-foreground flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {doctor.nextAvailable}
                        </p>
                      </div>
                      {/* Button (was: <Button>) */}
                      <button className="btn-action px-6 py-2 font-medium rounded bg-primary text-white hover:bg-primary-dark transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {filteredDoctors.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No doctors found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 