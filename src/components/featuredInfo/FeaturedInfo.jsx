import './featuredInfo.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Featuredinfo() {
    return (
        <div className="featuredinfo">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">567</span>
                    <span className="featuredMoneyRate">-5.67 <ArrowDownwardIcon className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">567</span>
                    <span className="featuredMoneyRate">-5.67 <ArrowDownwardIcon className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">567</span>
                    <span className="featuredMoneyRate">+5.67 <ArrowUpwardIcon className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}