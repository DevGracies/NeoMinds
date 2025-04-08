export const handleEnrollment = (req, res) => {
    const { parentName, childName, email, age, program } = req.body;
  
    if (!parentName || !childName || !email || !age || !program) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    console.log('📩 New Enrollment:', req.body);
  
    // Here you can insert into a DB or trigger an email
    res.status(200).json({ message: 'Enrollment received successfully!' });
  };
  