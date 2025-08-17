import './App.css'
import PlayerForm from './components/Home'
function App() {

  return (
    <>
     {/* <Home /> */}
<PlayerForm initialData={{ playername: '', preferredposition: '' }} onSubmitProps={(data, setErrors, setFormData) => {
       console.log('Form submitted:', data);
       // Simulate a successful submission
       setTimeout(() => {
         setFormData({ playername: '', preferredposition: '' });
         setErrors({});
       }, 1000);
     }} />
    </>
  )
}

export default App
