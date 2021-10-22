import React from 'react'

const User = ({user}) => {
    return (
        <div>
            <table className="table-light table-bordered">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                    </tr>
                    <tr>
                        <td>{ user.firstName}</td>
                        <td>{ user.lastName}</td>
                        <td>{ user.age}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default User
