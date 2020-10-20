export default function GetTodoListServiceData(){
    return new Promise((resolve) => {
        fetch("https://nztodo.herokuapp.com/api/tasks/?format=json")
        .then(res => res.json())
        .then(
            (result)=> {
                resolve(result);
            },
            (error) => {
                resolve(null);
            }
        )
    });
}