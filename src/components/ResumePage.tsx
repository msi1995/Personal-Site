import Resume from "../files/Lloyd_Doug_ResumeA.pdf";
export const ResumePage = () => {
  return (
    <div className="embed-responsive" style={{ height: "100vh" }}>
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
