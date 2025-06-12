import Link from 'next/link';
// import GstApproval from '@/components/gstApproval'; // Unused, remove for now

export default function Home() {
  return (
    <div className='whole'>
      <div className="top">
        <img src="TamilNadu_Logo.svg.png" className="image" alt="Tamil Nadu Logo" />
        <p className="title">
          <b>GovEase: Simplifying Government Approvals Through A Unified Digital Interface</b>
        </p>
        <button className="login">Login</button>
      </div>

      <div className="bottom">
        <div className="about">
          <b style={{ color: "#010e1d" }}>What does GovEase provide?</b>
          <p style={{
            fontFamily: "'Verdana', Times, serif",
            fontSize: "20px",
            textAlign: "justify",
            padding: "10px",
            lineHeight: "1.6"
          }}>
            <strong>GovEase</strong> is a unified digital platform designed to simplify and streamline
            the process of obtaining government approvals, licenses, and permits. The platform offers
            dynamic, smart forms that adjust based on the type of approval being requested, real-time
            application tracking, and secure document uploads. GovEase automatically routes applications
            to the relevant departments and notifies users of status updates or required actions.
          </p>
        </div>

        <div className="bene">
          <div className="benefit-item">
            <img src="round_61496.png" className="icon" alt="Benefit 1" />
            One Stop Platform<br />
            <p className="text">
              Apply for all government approvals through a single platform—no more visiting multiple offices.
            </p>
          </div>

          <div className="benefit-item">
            <img src="number-2_11830810.png" className="icon" alt="Benefit 2" />
            Saves Time & Cost<br />
            <p className="text">
              No long queues, paperwork, or travel—submit everything online, quickly and efficiently.
            </p>
          </div>

          <div className="benefit-item">
            <img src="number-3_8890922.png" className="icon" alt="Benefit 3" />
            Real-Time Tracking<br />
            <p className="text">
              Track your application status at every stage with full transparency.
            </p>
          </div>

          <div className="benefit-item">
            <img src="number-4_8068092.png" className="icon" alt="Benefit 4" />
            Fast query management<br />
            <p className="text">
              Get quick resolution to your queries from our dedicated team.
            </p>
          </div>
        </div>

        <div className="menu">
          <div className="row">
            <Link href="/gstApproval">
              <div className="list1">GST Approval</div>
            </Link>
            <div className="list1">DTCP Approval</div>
          </div>
          <div className="row">
            <Link href="/startup">
              <div className="list1">Startup Registration</div>
            </Link>            
            <div className="list1">Udhayam Registration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
