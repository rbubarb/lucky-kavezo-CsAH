
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enterclass1');
        return;
      }
  
      entry.target.classList.remove('enterclass1');
    });
  });
  
  const squares1 = document.querySelectorAll('.entergroup1');

  squares1.forEach((element) => observer1.observe(element));

  
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enterclass2');
        return;
      }
  
      entry.target.classList.remove('enterclass2');
    });
  });
  
  const squares2 = document.querySelectorAll('.entergroup2');

  squares2.forEach((element) => observer2.observe(element));