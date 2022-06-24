import React from 'react'
const Share = () => {
    
const onClick = () => {
    alert('Du kan nu ladda ner och dela produkt-bilden på instagram :)')
}

  return (
      <div style={{ padding: '7px'}}>
        <a onClick={onClick} href="https://instagram.com" target="_blank" rel="noreferrer">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        
      </div>
      
  );
};

export default Share;