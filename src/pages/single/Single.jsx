import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
const Single = () => {
	return (
		<div className='single'>
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />
				<div className='top'>
					<div className='left'>
						<div className='editButton'>Edit</div>
						<h1 className='title'>Information</h1>
						<div className='item'>
							<img
								src='https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?cs=srgb&dl=pexels-carlos-oliva-3586966.jpg&fm=jpg'
								alt=''
								className='itemImg'
							/>
							<div className='details'>
								<h1 className='itemTitle'>Mary Smith</h1>
								<div className='detailItem'>
									<span className='itemKey'>Email:</span>
									<span className='itemValue'>marysmith@gmail.com</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Phone:</span>
									<span className='itemValue'>+1 204 123 4567</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Address:</span>
									<span className='itemValue'>
										27-399 6th Ave SE Swift Current. SK
									</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Country:</span>
									<span className='itemValue'>Canada</span>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<Chart aspect={3 / 1} title='User Spending (Last 6 Months)' />
					</div>
				</div>
				<div className='bottom'>
					<h1 className='title'>Last Transactions</h1>
					<List />
				</div>
			</div>
		</div>
	);
};
export default Single;
