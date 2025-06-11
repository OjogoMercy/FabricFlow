
console.log('Todo-App')
console.log('Tasks')
export const Tasks = [
    { id: 1, text: 'Buy groceries' ,liked:false,mark:true,pending: true},
    { id: 2, text: 'Walk the dog',liked:false,mark:false ,pending: false},
    { id: 3, text: 'Read a book',liked:false ,mark:false,pending: true},
]
export function addTask (id,text,liked){
   return Tasks.push({
    id: id,
    text: text,
    liked :liked,
    mark: false,
    pending: true
   });
}

addTask(4,'Take a break', false)
addTask(5, 'Take a Walk', true)

 export const toMark = Tasks.find((task) => task.id === 2);
// use find when you need to get a single element but when going for a category of  items use a filter

// const a = Tasks.map((d, i)=>{
//     if (d.id === 2){
//         console.log(`Task with id ${d.id} marked as done`)
//     return  d.mark = false
        
//     }
// })
// console.log(a)

// to mark  a task as completed
if (toMark){
    toMark.mark= true;
console.log('Task marked as done',Tasks[2].text);
   
}    
// to remove a task
export const removeTask = (taskId) => {
  return Tasks.filter(task => task.id !== taskId);
};
// console.log(remove)

// filter tasks as completed or pending

 export const toComplete = Tasks.filter((tasks) => tasks.pending === false)
console.log('Completed Tasks:', toComplete);

export const pending = Tasks.filter((tasks)=> tasks.pending === true)
console.log('Pending Tasks:', pending);

// to display all tasks with their status 
export const toDisplay = Tasks.filter((tasks) => tasks.text);
toDisplay.forEach (task => {
    console.log(`Tasks":${task.text} --:Pending :${task.pending}`)   
})
