export default function updateLocalStorage(list){
    localStorage.setItem('list', JSON.stringify(list))
}