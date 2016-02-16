  var home = document.getElementById('home');
  var about = document.getElementById('about');
  var skills = document.getElementById('skills');
  var contact = document.getElementById('contact');

  var nameHome = home.className;
  var nameAbout = about.className;
  var nameSkills = skills.className;
  var nameContact = contact.className;

  home.onclick = function(){
      home.className = nameHome + 'active';
      about.className = nameAbout;
      skills.className = nameSkills;
      contact.className = nameContact;
  };

  about.onclick = function(){
      home.className = nameHome;
      about.className = nameAbout + 'active';
      skills.className = nameSkills;
      contact.className = nameContact;
  };

  skills.onclick = function(){
      home.className = nameHome;
      about.className = nameAbout;
      skills.className = nameSkills + 'active';
      contact.className = nameContact;
  };

  contact.onclick = function(){
      home.className = nameHome ;
      about.className = nameAbout;
      skills.className = nameSkills;
      contact.className = nameContact + 'active';
  };



