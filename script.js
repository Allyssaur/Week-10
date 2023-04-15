let id = 0;
let roll = 1;

//when clicking "create" button the getValues() function executes

document.getElementById('add').addEventListener('click', () => {
    getValues(id++);
})

//Obtains and assigns values to the table per task.  TBH I tried to separate this into two seprate functions
//however I couldn't get the scope to work correctly with the DOM.  I tried about 50 different ways of doing this
//and this was the only one that worked *correctly*
function getValues () {
    let assignedRow = document.getElementById(`task-${id}`);
    let rollCell = assignedRow.insertCell(0);
    let getTask = document.getElementById(`roll-${id}`);
  
    rollCell.setAttribute('id', 'roll-' + `${id}`);
    rollCell.innerHTML = `${roll++}`;

    let itemCell = assignedRow.insertCell(1);
    let getItem = document.getElementById(`item-${id}`);

    itemCell.setAttribute('id', 'item-' + `${id}`);
    itemCell.innerHTML = document.getElementById('new-task').value;


    // FIX DATE GRAB SYSTEM WONT GRAB DATE

    let dateCell = assignedRow.insertCell(2);
    let getDate = document.getElementById(`new-date-start`);

    let createdDate = new Date();
    dateCell.setAttribute('id', 'date-' + `${id}`);
    dateCell.innerHTML = `${createdDate.getMonth() + 1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;

    let diffCell = assignedRow.insertCell(3);
    let getDiff = document.getElementById(`diff-${id}`);

    diffCell.setAttribute('id', 'diff-' + `${id}`);
    diffCell.innerHTML = getStarValue();

    console.log(id);

    //Allows certain tasks to be assigned to certain numbers ex, 1 is a Critical Fail in DND
    let star = document.innerText = "&#11088;";
    if(id === 1) {
        rollCell.innerHTML = '1';
        itemCell.innerHTML = 'CRITICAL FAIL! Do All Tasks Then Re-roll D6 And Add Result To Task Count!';
        dateCell.innerHTML = 'N/A';
        diffCell.innerHTML = star + star + star + star + star;
        }
        else if (id === 13) {
            rollCell.innerHTML = '13';
            itemCell.innerHTML = 'Side Quest!';
            dateCell.innerHTML = 'N/A';
            diffCell.innerHTML = 'N/A';
            }
        else if (id === 20)  {
            rollCell.innerHTML = '20';
            itemCell.innerHTML = 'Chore of Choice!';
            dateCell.innerHTML = 'N/A';
            diffCell.innerHTML = 'N/A';
            }
        else if (id >= 20) {
            alert('You cannot add more than 20 tasks!');
        }
    }

//this grabs the difficulty setting and returns star emojis to the table

function getStarValue() {
    let starValue = document.getElementById('customRange0').value;
    let star = document.innerText = "&#11088;";
    if(starValue === '1') {
        return(star);
    } else if (starValue === '2') {
        return(star + star);
    } else if (starValue === '3') {
        return(star + star + star)
    } else if (starValue === '4') {
        return(star + star + star + star)
    } else if (starValue === '5') {
            return(star + star + star + star + star)
    }   else {
            return("N/A")
            }
    }

// this adds the ability to mark off a list item when finished.  It is a toggle so tasks can be reused later if wanted.
//I wanted it to mark out the whole table row but it just won't work the way I imagined.  I will revisit this at a later time.

    let list = document.querySelector('table');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'TD') {
        ev.target.classList.toggle('checked');
      }
    }, false);



// To Add Later:

// Make Autofill button change style of .autofill-task display to 'block' upon clicking

// Displays autofilled tasks when 'autofill' button is clicked; 

// add floating notification to 'autofill' button that says 'some tasks may not apply to all"