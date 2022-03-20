const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");


// Get blogs by tags
const getBlogByTag = asyncHandler(async (req,res) => {
    const Blogs = await Blog.find({ tags : req.params.search });

    const latestBlog = [];

    for(let i = 0; i< Blogs.length; i++){
        latestBlog.push(Blogs[Blogs.length - (i+1)])
    }

    if (Blogs) {
        res.status(200).json({
            success: true,
            data: latestBlog,
        });
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
}) 


// Get 4 latest blogs
const get4LatestBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({});
    if (Blogs.length > 0) {

        const latestBlog = [];

        for(let i = 0; i<4; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

        res.status(200).json({
            success: true,
            data: latestBlog,
        });

    } else {
        res.status(200).json({
            success: false,
            data: "No Blog found",
        });
    }
});

// Get 4 latest news blogs
const get4LatestNewsBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{type : "news"},{type : "News"}]});

    const latestBlog = [];

        for(let i = 0; i<4; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});


// Get 4 latest business blogs
const get4LatestBusinessBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "business"},{type : "Business" }]});

    const latestBlog = [];

        for(let i = 0; i<4; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});


// Get 4 latest sociology blogs
const get4LatestSociologyBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "sociology"},{type : "Sociology" }]});

    const latestBlog = [];

        for(let i = 0; i<4; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});


// Get 4 latest tech blogs
const get4LatestTechBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "tech"},{type : "Tech" }]});

    const latestBlog = [];

        for(let i = 0; i<4; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});

// Get 4 latest economic blogs
const get4LatestEconomicBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "economic"},{type : "Economic" }]});

    const latestBlog = [];

        for(let i = 0; i<4; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});

// Get 4 latest other blogs
const get4LatestOtherBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "Other" },{ type: "other" },{ type: "Others" },{ type: "others" }]});

    const latestBlog = [];

        for(let i = 0; i<4; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});



// Get latest all Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({});
    if (Blogs.length > 0) {

        const latestBlog = [];

        for(let i = 0; i< Blogs.length; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

        res.status(200).json({
            success: true,
            data: latestBlog,
        });

    } else {
        res.status(200).json({
            success: false,
            data: "No Blog found",
        });
    }
});

// Get details of all News Blog
const getAllNewsBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{type : "news"},{type : "News"}]});

    const latestBlog = [];

        for(let i = 0; i< Blogs.length; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});


// Get all business Blogs
const getAllBusinessBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "business"},{type : "Business" }]});

    const latestBlog = [];

        for(let i = 0; i<= Blogs.length; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No Business Blog found",
        });
    }
});

// Get all sociology blogs
const getAllSociologyBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "Sociology" },{ type: "sociology" }]});

    const latestBlog = [];

        for(let i = 0; i< Blogs.length; i++){
            latestBlog.push(Blogs[Blogs.length - (i+1)])
        }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No Sociology Blog found",
        });
    }
});

// Get all tech blogs
const getAllTechBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "Tech" },{type : "tech"}]});

    const latestBlog = [];

    for(let i = 0; i< Blogs.length; i++){
        latestBlog.push(Blogs[Blogs.length - (i+1)])
    }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No Tech Blog found",
        });
    }
});


// Get all lastest economic blogs
const getAllEconomicBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "Economic" },{ type: "economic" }]});

    const latestBlog = [];

    for(let i = 0; i< Blogs.length; i++){
        latestBlog.push(Blogs[Blogs.length - (i+1)])
    }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No Economic Blog found",
        });
    }
});

// get all lastest other blogs
const getAllOtherBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({$or : [{ type: "Other" },{ type: "other" },{ type: "Others" },{ type: "others" }]});

    const latestBlog = [];

    for(let i = 0; i< Blogs.length; i++){
        latestBlog.push(Blogs[Blogs.length - (i+1)])
    }

    if (Blogs.length > 0) {
        res.status(200).json(latestBlog);
    } else {
        res.status(404).json({
            message: "No Other Blog found",
        });
    }
});

// Get blog by blog id
const getBlogById = asyncHandler(async (req, res) => {
    const foundBlog = await Blog.findById(req.params.id);
    if (foundBlog) {
        res.status(200).json({
            success: true,
            data: foundBlog,
        });
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

// Get all latest blog by jounId
const getAllBlogsOfJounById = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ jounId: req.params.id });

    const latestBlog = [];

    for(let i = 0; i< Blogs.length; i++){
        latestBlog.push(Blogs[Blogs.length - (i+1)])
    }

    if (Blogs) {
        res.status(200).json({
            success: true,
            data: latestBlog,
        });
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

module.exports = {
    getBlogByTag,
    get4LatestBlogs,
    get4LatestNewsBlogs,
    get4LatestBusinessBlogs,
    get4LatestSociologyBlogs,
    get4LatestTechBlogs,
    get4LatestEconomicBlogs,
    get4LatestOtherBlogs,
    getAllBlogs,
    getAllBusinessBlogs,
    getAllNewsBlogs,
    getAllSociologyBlogs,
    getAllTechBlogs,
    getAllEconomicBlogs,
    getAllOtherBlogs,
    getBlogById,
    getAllBlogsOfJounById
};