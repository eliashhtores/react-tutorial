const Employee = ({ firstName, lastName, age }) => {
    return (
        <div>
            <h3>Employee: {firstName} {lastName} is {age} years old</h3>
        </div>
    )
}

export default Employee