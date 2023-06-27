import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type projectProps = {
  Title: string;
  Description: string;
  Role: string;
  ImageURL: string;
  Stack: string;
};

export default function Display({
  Title,
  Description,
  ImageURL,
  Role,
  Stack,
}: projectProps) {
  return (
    <Card className="bg-[#031632] h-[100%] w-[40%]">
      <CardMedia
        component="img"
        className="h-[40%]"
        image={ImageURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" color="#34bac2">
          {Title}
        </Typography>
        <Typography variant="h5" color="#34bac2">
          {Role}
        </Typography>
        <Typography variant="body2" color="#34bac2">
          {Description}
        </Typography>
      </CardContent>
    </Card>
    // <div className="w-[40%] h-[90%] flex flex-col justify-start flex-none rounded-lg shadow-inner shadow-cyan-500/50">
    //   <span className="h-[40%]">image goes here</span>
    //   <div className="flex flex-col justify-start w-[90%] mx-auto">
    //     <div className="flex flex-col justify-evenly">
    //       <h1 className="text-3xl font-bold">My Display of {Title}</h1>
    //       <h2>{Role}</h2>
    //       <p>Made with {Stack} </p>
    //     </div>
    //     <span className="mt-[30px]">
    //       {Description}
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat.
    //     </span>
    //   </div>
    // </div>
  );
}
