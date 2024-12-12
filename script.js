document.getElementById('example-button').addEventListener('click', function() {
    const reflection = document.getElementById('reflection');
    const notificationText = document.getElementById('notification-text');
  
    // Set new reflection text
    const reflections = [
      "Reflect on the importance of setting small, achievable goals to maintain progress.",
      "Think about a time when you felt most productive and the habits that contributed to that.",
      "Consider how you can make better use of your time in the next week.",
      "Reflect on a challenge you've overcome and how it shaped your approach to similar tasks."
    ];
    
    const randomReflection = reflections[Math.floor(Math.random() * reflections.length)];
    notificationText.textContent = randomReflection;
  
    // Show reflection with smooth dropdown
    reflection.classList.remove('hidden');
    setTimeout(() => {
      reflection.style.opacity = 1;
      reflection.style.transform = 'translateY(0)';
    }, 100);
  });
  
  document.getElementById('close-notification').addEventListener('click', function() {
    const reflection = document.getElementById('reflection');
  
    // Hide the reflection
    reflection.style.opacity = 0;
    reflection.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      reflection.classList.add('hidden');
    }, 500);
  });
  