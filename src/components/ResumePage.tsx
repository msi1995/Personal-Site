import Resume from "../files/Lloyd_Doug_Resume.pdf";
export const ResumePage = () => {
  return (
    <div className="embed-responsive" style={{ height: "100vh", backgroundColor: 'white'}}>
      <embed
        src={Resume}
        type="application/pdf"
        width="100%"
        height="100%"
        title="Resume"
      />
    </div>
  );
};
