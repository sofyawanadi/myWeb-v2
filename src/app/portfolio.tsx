import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { PictureAsPdf } from "@mui/icons-material";
import { useState } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
export default function PortofolioCard() {
   const images = ["/1.jpg", "/2.jpg", "/3.jpg"];
   const imgTapMm = ["/tapmm/fmr.png","/tapmm/mcrf.png","/tapmm/mtc.png"]
   const imgEproc = ["/eproc/po.png","/eproc/cbe-draft.png","/eproc/blast-email.png"]
   const imgInagro = ["/inagro/1.png","/inagro/2.png","/inagro/3.png"]
   const CarouselCard: React.FC<{ imgUrl: string[] }> = ({ imgUrl }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isFullscreen, setIsFullscreen] = useState(false);

      const handleNext = () =>
         setCurrentIndex((prev) => (prev + 1) % images.length);
      const handlePrev = () =>
         setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

      return (
          <Card sx={{ maxWidth: 400, position: "relative" }}>
            <CardActionArea onClick={() => setIsFullscreen(true)}>
               <CardMedia
                 component="img"
                 height="300"
                 image={imgUrl[currentIndex]}
                 alt="carousel image"
               />
            </CardActionArea>
            <Box
               sx={{
                 position: "absolute",
                 top: "50%",
                 left: 0,
                 transform: "translateY(-50%)",
               }}>
               <IconButton onClick={handlePrev} sx={{ color: "white" }}>
                 <ArrowBackIos />
               </IconButton>
            </Box>
            <Box
               sx={{
                 position: "absolute",
                 top: "50%",
                 right: 0,
                 transform: "translateY(-50%)",
               }}>
               <IconButton onClick={handleNext} sx={{ color: "white" }}>
                 <ArrowForwardIos />
               </IconButton>
            </Box>
            {isFullscreen && (
               <Box
                 sx={{
                   position: "fixed",
                   top: 0,
                   left: 0,
                   width: "100vw",
                   height: "100vh",
                   backgroundColor: "rgba(0, 0, 0, 0.8)",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   zIndex: 1000,
                 }}
                 onClick={() => setIsFullscreen(false)}>
                 <CardMedia
                   component="img"
                   image={imgUrl[currentIndex]}
                   alt="fullscreen carousel image"
                   sx={{ maxHeight: "90%", maxWidth: "90%" }}
                 />
               </Box>
            )}
          </Card>
      );
   };

   return (
      <div id="Portofolio" className="flex flex-col justify-center items-center h-[70vh] bg-gray-100">
         <Typography
            variant="h4"
            component="div"
            color="black"
            sx={{ marginBottom: 2 }}>
            PORTFOLIO
         </Typography>
         <div className="flex">
            <Card sx={{ maxWidth: 345, margin: 2, maxHeight: "60vh" }}>
               <CarouselCard imgUrl={imgTapMm}/>
               <CardContent sx={{ overflowY: "auto", maxHeight: "200px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                     Tap MM
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                     Tap MM is an application related to warehousing in the
                     field of procurement. It helps manage inventory, track
                     stock levels, and streamline the procurement process. The
                     application ensures efficient handling of goods, reduces
                     errors, and improves overall productivity in warehouse
                     operations.
                  </Typography>
               </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, margin: 2, maxHeight: "60vh" }}>
               <CarouselCard imgUrl={imgEproc}/>
               <CardContent sx={{ overflowY: "auto" }}>
                  <Typography gutterBottom variant="h5" component="div">
                     E-proc
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                     E-proc is an application that handles vendor registration,
                     tender creation, winner selection, and vendor evaluation.
                     It streamlines the procurement process, ensuring efficient
                     and transparent management of tenders and vendor
                     relationships.
                  </Typography>
               </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, margin: 2, maxHeight: "60vh" }}>
               <CarouselCard imgUrl={imgInagro}/>
               <CardContent sx={{ overflowY: "auto", maxHeight: "200px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                     Inagro Jinawi
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                     Inagro Jinawi is an application that tracks the
                     traceability of palm sugar from farmers to collectors and
                     finally to Inagro. It ensures transparency and efficiency
                     in the supply chain, helping to monitor the quality and
                     origin of the product at each stage.
                  </Typography>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
