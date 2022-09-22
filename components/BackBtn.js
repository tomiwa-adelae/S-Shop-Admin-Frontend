import Link from 'next/link';

const BackBtn = ({ to }) => {
   return (
      <Link href={to}>
         <div className="container my-1">
            <button className="btn btn-grey">Back</button>
         </div>
      </Link>
   );
};

export default BackBtn;
