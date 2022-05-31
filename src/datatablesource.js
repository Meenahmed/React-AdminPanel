export const userColumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{
		field: 'user',
		headerName: 'User',
		width: 200,
		renderCell: (params) => {
			return (
				<div className='cellWithImg'>
					<img className='cellImg' src={params.row.img} alt='avatar' />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 230,
	},

	{
		field: 'age',
		headerName: 'Age',
		width: 100,
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 160,
		renderCell: (params) => {
			return (
				<div className={`cellWithStatus ${params.row.status}`}>
					{params.row.status}
				</div>
			);
		},
	},
];

export const userRows = [
	{
		id: 1,
		username: 'Mathew',
		img: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-voortman-189349.jpg&fm=jpg',
		status: 'active',
		email: 'mathew@gmail.com',
		age: 25,
	},
	{
		id: 2,
		username: 'Jane',
		img: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1366919.jpg&fm=jpg',
		email: 'jane@gmail.com',
		status: 'passive',
		age: 45,
	},
	{
		id: 3,
		username: 'Lima',
		img: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-kaique-rocha-775201.jpg&fm=jpg',
		email: 'lima@gmail.com',
		status: 'pending',
		age: 37,
	},
	{
		id: 4,
		username: 'Shark',
		img: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?cs=srgb&dl=pexels-matthew-montrone-1179229.jpg&fm=jpg',
		email: 'shark@gmail.com',
		status: 'active',
		age: 26,
	},
	{
		id: 5,
		username: 'Sarah',
		img: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg',
		email: 'sarah@gmail.com',
		status: 'passive',
		age: 32,
	},
	{
		id: 6,
		username: 'John Doe',
		img: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?cs=srgb&dl=pexels-frans-van-heerden-624015.jpg&fm=jpg',
		email: 'johndoe@gmail.com',
		status: 'active',
		age: 18,
	},
	{
		id: 7,
		username: 'Clifford smith',
		img: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg',
		email: 'csmith@gmail.com',
		status: 'passive',
		age: 41,
	},
	{
		id: 8,
		username: 'Mary Frances',
		img: 'https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?cs=srgb&dl=pexels-jeremy-bishop-3464632.jpg&fm=jpg',
		email: 'fmary@gmail.com',
		status: 'active',
		age: 60,
	},
	{
		id: 9,
		username: 'Peter Doe',
		img: 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?cs=srgb&dl=pexels-paul-ijsendoorn-33041.jpg&fm=jpg',
		email: 'pdoe@gmail.com',
		status: 'pending',
		age: 55,
	},
	{
		id: 10,
		username: 'Roxie Peter',
		img: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?cs=srgb&dl=pexels-carlos-oliva-3586966.jpg&fm=jpg',
		email: 'peterr@gmail.com',
		status: 'active',
		age: 45,
	},
];
