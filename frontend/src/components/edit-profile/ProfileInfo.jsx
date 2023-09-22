/* eslint-disable react/prop-types */
const ProfileInfo = ({ info }) => {
  return (
    <>
      <h3 style={{ marginTop: 0 }}>Username</h3>
      <p>{info.name}</p>
      <p>
        <em>{info.bio}</em>
      </p>
      <table>
        <tbody>
          <tr>
            <th>Videos posted</th>
            <th>Workouts</th>
          </tr>
          <tr>
            <td>50</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProfileInfo;
