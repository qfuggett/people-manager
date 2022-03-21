export default function User(props) {
    return (
        <tr>
            <th>{props.id}</th>  
            <th>{props.name}</th>
            <th>{props.email}</th>
            <th>{props.birthday}</th>
            <th>{props.zip}</th>
        </tr>
    )
}