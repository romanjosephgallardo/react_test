import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={31} isStudent={true}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={39} isStudent={false}/>
      <Student />
    </>
  );
}

export default App


