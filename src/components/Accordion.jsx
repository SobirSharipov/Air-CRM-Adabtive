import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div className='my-[20px]'>
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleExpansion("panel1")}
                    sx={{
                        borderRadius: "16px  !important",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor: "#f8fafc",
                        boxShadow: "none",
                        "&:before": { display: "none" },
                        "&.Mui-expanded": {
                            margin: "8px 0",
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            minHeight: 48,
                            "& .MuiAccordionSummary-content": {
                                margin: "12px 0",
                            },
                        }}
                    >
                        <Typography sx={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>
                            Зачем добавлять склад?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: "Montserrat-Medium", fontSize: "13px", color: "#5E5F62" }}>
                            Имеется спорная точка зрения, гласящая примерно следующее:
                            диаграммы связей представляют собой не что иное,
                            как квинтэссенцию победы маркетинга над разумом и должны быть разоблачены.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
            <div className='my-[20px]'>
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleExpansion("panel2")}
                    sx={{
                        borderRadius: "16px  !important",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor: "#f8fafc",
                        boxShadow: "none",
                        "&:before": { display: "none" },
                        "&.Mui-expanded": {
                            margin: "8px 0",
                        }
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>Зачем добавлять склад?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: "Montserrat-Medium", fontSize: "13px", color: "#5E5F62" }}>Имеется спорная точка зрения, гласящая примерно следующее:
                            диаграммы связей представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть разоблачены. </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='my-[20px]'>
                <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleExpansion("panel3")}
                    sx={{
                        borderRadius: "16px  !important",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor: "#f8fafc",
                        boxShadow: "none",
                        "&:before": { display: "none" },
                        "&.Mui-expanded": {
                            margin: "8px 0",
                        }
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>Зачем добавлять склад?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: "Montserrat-Medium", fontSize: "13px", color: "#5E5F62" }}>Имеется спорная точка зрения, гласящая примерно следующее:
                            диаграммы связей представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть разоблачены. </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='my-[20px]'>
                <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleExpansion("panel4")}
                    sx={{
                        borderRadius: "16px  !important",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor: "#f8fafc",
                        boxShadow: "none",
                        "&:before": { display: "none" },
                        "&.Mui-expanded": {
                            margin: "8px 0",
                        }
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontFamily: "Montserrat-SemiBold", fontSize: "15px" }}>Зачем добавлять склад?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: "Montserrat-Medium", fontSize: "13px", color: "#5E5F62" }}>Имеется спорная точка зрения, гласящая примерно следующее:
                            диаграммы связей представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть разоблачены. </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
