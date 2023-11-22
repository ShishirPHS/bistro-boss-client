import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/Home/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="mb-16">
        <SectionTitle
          subHeader={"At a Glance!"}
          header={"payment history"}
        ></SectionTitle>
      </div>
      <div className="bg-white p-14">
        <h2 className="text-4xl font-bold mb-4">
          Total Payments: {payments.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th className="rounded-tl-2xl">#</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th className="rounded-tr-2xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => (
                <tr key={payment._id}>
                  <th>{idx + 1}</th>
                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
