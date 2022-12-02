import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Report from './Report';

const ReportedItem = () => {
   
    const {
        isLoading,
        error,
        data: reports = [],
    } = useQuery({
        queryKey: ["report"],
        queryFn: () =>
            fetch("https://used-furniture-server-site.vercel.app/report").then((res) =>
                res.json()
            ),
    });
    
    if (isLoading) return; 
    <p>Loading...</p>
    if (error) return "An error has occurred: " + error.message;

    const handlereportDelete = (id) => {
        fetch(`https://used-furniture-server-site.vercel.app/report/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("delete successfully");
                }
            });
    };

    return (
        <div className="">
            {reports?.map((report) => (
                <Report
                    key={report._id}
                    report={report}
                    handlereportDelete={handlereportDelete}
                ></Report>
            ))}
        </div>
    );
};

export default ReportedItem;