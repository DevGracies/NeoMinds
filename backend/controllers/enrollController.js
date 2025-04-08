export const handleEnrollment = (req, res) => {
    const {
       parentName,
      email,
      phone,
      childName,
      ageGroup,
      startDate,
      notes
     } = req.body;
  
    if (!parentName || !childName || !email || !ageGroup|| phone || startDate || notes) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    console.log('📩 New Enrollment:', req.body);
  
    // Here you can insert into a DB or trigger an email
    res.status(200).json({ message: 'Enrollment received successfully!' });
  };
  