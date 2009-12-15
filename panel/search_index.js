var search_data = {"index":{"searchIndex":["resque","failure","base","hoptoad","redis","helpers","job","noclasserror","noqueueerror","server","stat","worker","<<()","==()","==()",">>()","[]()","all()","all()","all()","all()","api_key()","args()","attach()","backend()","backend=()","class_if_current()","classify()","clear()","clear()","clear()","clear()","configure()","constantize()","count()","count()","count()","count()","create()","create()","current_page()","current_section()","decode()","decr()","done_working()","enable_gc_optimizations()","encode()","enqueue()","exists?()","fail()","failed()","failed!()","find()","fork()","get()","hostname()","id()","idle?()","incr()","info()","inspect()","inspect()","job()","keys()","kill_child()","list_range()","log()","log()","log!()","new()","new()","new()","partial()","partial?()","path_prefix()","payload_class()","peek()","perform()","poll()","pop()","process()","processed()","processed!()","processing()","prune_dead_workers()","push()","queues()","queues()","recreate()","redis()","redis()","redis=()","redis_get_size()","redis_get_value_as_array()","register_signal_handlers()","register_worker()","remove_queue()","reserve()","reserve()","reserve()","resque()","save()","save()","save()","send_to_hoptoad()","show()","show_args()","shutdown()","shutdown!()","size()","started()","started!()","startup()","state()","tab()","to_s()","to_s()","unregister_worker()","url()","url()","url()","url()","use_ssl?()","validate_queues()","watch_queue()","work()","worker_pids()","workers()","working()","working()","working?()","working_on()","history.md","license","readme.markdown","resque.rb","errors.rb","failure.rb","base.rb","hoptoad.rb","redis.rb","helpers.rb","job.rb","server.rb","jquery-1.3.2.min.js","jquery.relatize_date.js","ranger.js","reset.css","style.css","error.erb","failed.erb","key.erb","layout.erb","next_more.erb","overview.erb","queues.erb","stats.erb","workers.erb","working.erb","stat.rb","tasks.rb","version.rb","worker.rb"],"longSearchIndex":["lib/resque.rb","resque","resque::failure","resque::failure","resque::failure","resque","resque","resque","resque","resque","resque","resque","resque::stat","resque::job","resque::worker","resque::stat","resque::stat","resque::failure","resque::failure::base","resque::failure::redis","resque::worker","resque::failure::hoptoad","resque::job","resque::worker","resque::failure","resque::failure","resque::server","resque::helpers","resque::failure","resque::failure::base","resque::failure::redis","resque::stat","resque::failure::hoptoad","resque::helpers","resque::failure","resque::failure::base","resque::failure::hoptoad","resque::failure::redis","resque::failure","resque::job","resque::server","resque::server","resque::helpers","resque::stat","resque::worker","resque::worker","resque::helpers","resque","resque::worker","resque::job","resque::worker","resque::worker","resque::worker","resque::worker","resque::stat","resque::worker","resque::worker","resque::worker","resque::stat","resque","resque::job","resque::worker","resque::worker","resque","resque::worker","resque","resque::failure::base","resque::worker","resque::worker","resque::failure::base","resque::job","resque::worker","resque::server","resque::server","resque::server","resque::job","resque","resque::job","resque::server","resque","resque::worker","resque::worker","resque::worker","resque::worker","resque::worker","resque","resque","resque::worker","resque::job","resque","resque::helpers","resque","resque::server","resque::server","resque::worker","resque::worker","resque","resque","resque::job","resque::worker","resque::server","resque::failure::base","resque::failure::hoptoad","resque::failure::redis","resque::failure::hoptoad","resque::server","resque::server","resque::worker","resque::worker","resque","resque::worker","resque::worker","resque::worker","resque::worker","resque::server","resque","resque::worker","resque::worker","resque::failure","resque::failure::base","resque::failure::hoptoad","resque::server","resque::failure::hoptoad","resque::worker","resque","resque::worker","resque::worker","resque","resque","resque::worker","resque::worker","resque::worker","files/history_md.html","files/license.html","files/readme_markdown.html","files/lib/resque_rb.html","files/lib/resque/errors_rb.html","files/lib/resque/failure_rb.html","files/lib/resque/failure/base_rb.html","files/lib/resque/failure/hoptoad_rb.html","files/lib/resque/failure/redis_rb.html","files/lib/resque/helpers_rb.html","files/lib/resque/job_rb.html","files/lib/resque/server_rb.html","files/lib/resque/server/public/jquery-1_3_2_min_js.html","files/lib/resque/server/public/jquery_relatize_date_js.html","files/lib/resque/server/public/ranger_js.html","files/lib/resque/server/public/reset_css.html","files/lib/resque/server/public/style_css.html","files/lib/resque/server/views/error_erb.html","files/lib/resque/server/views/failed_erb.html","files/lib/resque/server/views/key_erb.html","files/lib/resque/server/views/layout_erb.html","files/lib/resque/server/views/next_more_erb.html","files/lib/resque/server/views/overview_erb.html","files/lib/resque/server/views/queues_erb.html","files/lib/resque/server/views/stats_erb.html","files/lib/resque/server/views/workers_erb.html","files/lib/resque/server/views/working_erb.html","files/lib/resque/stat_rb.html","files/lib/resque/tasks_rb.html","files/lib/resque/version_rb.html","files/lib/resque/worker_rb.html"],"info":[["Resque","lib/resque.rb","classes/Resque.html"," < ","",1],["Failure","Resque","classes/Resque/Failure.html"," < ","The Failure module provides an interface for working with different failure backends. You can use it",1],["Base","Resque::Failure","classes/Resque/Failure/Base.html"," < Object","All Failure classes are expected to subclass Base. When a job fails, a new instance of your Failure backend",1],["Hoptoad","Resque::Failure","classes/Resque/Failure/Hoptoad.html"," < Base","A Failure backend that sends exceptions raised by jobs to Hoptoad. To use it, put this code in an initializer,",1],["Redis","Resque::Failure","classes/Resque/Failure/Redis.html"," < Base","A Failure backend that stores exceptions in Redis. Very simple but works out of the box, along with support",1],["Helpers","Resque","classes/Resque/Helpers.html"," < ","Methods used by various classes in Resque. ",1],["Job","Resque","classes/Resque/Job.html"," < Object","A Resque::Job represents a unit of work. Each job lives on a single queue and has an associated payload",1],["NoClassError","Resque","classes/Resque/NoClassError.html"," < RuntimeError","Raised when trying to create a job without a class ",1],["NoQueueError","Resque","classes/Resque/NoQueueError.html"," < RuntimeError","Raised whenever we need a queue but none is provided. ",1],["Server","Resque","classes/Resque/Server.html"," < Sinatra::Base","",1],["Stat","Resque","classes/Resque/Stat.html"," < ","The stat subsystem. Used to keep track of integer counts. Get a stat:  Stat[name] Incr a stat: Stat.incr(name)",1],["Worker","Resque","classes/Resque/Worker.html"," < Object","A Resque Worker processes jobs. On platforms that support fork(2), the worker will fork off a child to",1],["<<","Resque::Stat","classes/Resque/Stat.html#M000056","(stat)","Increments a stat by one. ",2],["==","Resque::Job","classes/Resque/Job.html#M000039","(other)","Equality ",2],["==","Resque::Worker","classes/Resque/Worker.html#M000112","(other)","Is this worker the same as another worker? ",2],[">>","Resque::Stat","classes/Resque/Stat.html#M000058","(stat)","Decrements a stat by one. ",2],["[]","Resque::Stat","classes/Resque/Stat.html#M000054","(stat)","Alias of `get` ",2],["all","Resque::Failure","classes/Resque/Failure.html#M000027","(start = 0, count = 1)","Returns an array of all the failures, paginated. `start` is the int of the first item in the page, `count`",2],["all","Resque::Failure::Base","classes/Resque/Failure/Base.html#M000003","(start = 0, count = 1)","Returns a paginated array of failure objects. ",2],["all","Resque::Failure::Redis","classes/Resque/Failure/Redis.html#M000014","(start = 0, count = 1)","",2],["all","Resque::Worker","classes/Resque/Worker.html#M000061","()","Returns an array of all worker objects. ",2],["api_key","Resque::Failure::Hoptoad","classes/Resque/Failure/Hoptoad.html#M000016","()","",2],["args","Resque::Job","classes/Resque/Job.html#M000035","()","Returns an array of args represented in this job's payload. ",2],["attach","Resque::Worker","classes/Resque/Worker.html#M000065","(worker_id)","Alias of `find` ",2],["backend","Resque::Failure","classes/Resque/Failure.html#M000023","()","Returns the current backend class. If none has been set, falls back to `Resque::Failure::Redis` ",2],["backend=","Resque::Failure","classes/Resque/Failure.html#M000022","(backend)","Sets the current backend. Expects a class descendent of `Resque::Failure::Base`. Example use: require",2],["class_if_current","Resque::Server","classes/Resque/Server.html#M000044","(page = '')","",2],["classify","Resque::Helpers","classes/Resque/Helpers.html#M000025","(dashed_word)","Given a word with dashes, returns a camel cased version of it. classify('job-name') # => 'JobName' ",2],["clear","Resque::Failure","classes/Resque/Failure.html#M000029","()","Clear all failure jobs ",2],["clear","Resque::Failure::Base","classes/Resque/Failure/Base.html#M000005","()","Clear all failure objects ",2],["clear","Resque::Failure::Redis","classes/Resque/Failure/Redis.html#M000017","()","",2],["clear","Resque::Stat","classes/Resque/Stat.html#M000059","(stat)","Removes a stat from Redis, effectively setting it to 0. ",2],["configure","Resque::Failure::Hoptoad","classes/Resque/Failure/Hoptoad.html#M000009","()","",2],["constantize","Resque::Helpers","classes/Resque/Helpers.html#M000026","(camel_cased_word)","Given a camel cased word, returns the constant it represents constantize('JobName') # => JobName ",2],["count","Resque::Failure","classes/Resque/Failure.html#M000024","()","Returns the int count of how many failures we have seen. ",2],["count","Resque::Failure::Base","classes/Resque/Failure/Base.html#M000002","()","The number of failures. ",2],["count","Resque::Failure::Hoptoad","classes/Resque/Failure/Hoptoad.html#M000008","()","",2],["count","Resque::Failure::Redis","classes/Resque/Failure/Redis.html#M000013","()","",2],["create","Resque::Failure","classes/Resque/Failure.html#M000018","(options = {})","Creates a new failure, which is delegated to the appropriate backend. Expects a hash with the following",2],["create","Resque::Job","classes/Resque/Job.html#M000031","(queue, klass, *args)","Creates a job by placing it on a queue. Expects a string queue name, a string class name, and an optional",2],["current_page","Resque::Server","classes/Resque/Server.html#M000041","()","",2],["current_section","Resque::Server","classes/Resque/Server.html#M000040","()","",2],["decode","Resque::Helpers","classes/Resque/Helpers.html#M000021","(object)","Given a string, returns a Ruby object. ",2],["decr","Resque::Stat","classes/Resque/Stat.html#M000057","(stat, by = 1)","For a string stat name, decrements the stat by one. Can optionally accept a second int parameter. The",2],["done_working","Resque::Worker","classes/Resque/Worker.html#M000100","()","Called when we are done working - clears our `working_on` state and tells Redis we processed a job. ",2],["enable_gc_optimizations","Resque::Worker","classes/Resque/Worker.html#M000091","()","Enables GC Optimizations if you're running REE. http://www.rubyenterpriseedition.com/faq.html#adapt_apps_for_cow",2],["encode","Resque::Helpers","classes/Resque/Helpers.html#M000020","(object)","Given a Ruby object, returns a string suitable for storage in a queue. ",2],["enqueue","Resque","classes/Resque.html#M000080","(klass, *args)","This method can be used to conveniently add a job to a queue. It assumes the class you're passing it",2],["exists?","Resque::Worker","classes/Resque/Worker.html#M000066","(worker_id)","Given a string worker id, return a boolean indicating whether the worker exists ",2],["fail","Resque::Job","classes/Resque/Job.html#M000036","(exception)","Given an exception object, hands off the needed parameters to the Failure module. ",2],["failed","Resque::Worker","classes/Resque/Worker.html#M000103","()","How many failed jobs has this worker seen? Returns an int. ",2],["failed!","Resque::Worker","classes/Resque/Worker.html#M000104","()","Tells Redis we've failed a job. ",2],["find","Resque::Worker","classes/Resque/Worker.html#M000064","(worker_id)","Returns a single worker object. Accepts a string id. ",2],["fork","Resque::Worker","classes/Resque/Worker.html#M000088","()","Not every platform supports fork. Here we do our magic to determine if yours does. ",2],["get","Resque::Stat","classes/Resque/Stat.html#M000053","(stat)","Returns the int value of a stat, given a string stat name. ",2],["hostname","Resque::Worker","classes/Resque/Worker.html#M000116","()","chomp'd hostname of this machine ",2],["id","Resque::Worker","classes/Resque/Worker.html#M000115","()","Alias for #to_s",2],["idle?","Resque::Worker","classes/Resque/Worker.html#M000110","()","Boolean - true if idle, false if not ",2],["incr","Resque::Stat","classes/Resque/Stat.html#M000055","(stat, by = 1)","For a string stat name, increments the stat by one. Can optionally accept a second int parameter. The",2],["info","Resque","classes/Resque.html#M000085","()","Returns a hash, similar to redis-rb's #info, of interesting stats. ",2],["inspect","Resque::Job","classes/Resque/Job.html#M000038","()","String representation ",2],["inspect","Resque::Worker","classes/Resque/Worker.html#M000113","()","",2],["job","Resque::Worker","classes/Resque/Worker.html#M000107","()","Returns a hash explaining the Job we're currently processing, if any. ",2],["keys","Resque","classes/Resque.html#M000090","()","Returns an array of all known Resque keys in Redis. Redis' KEYS operation is O(N) for the keyspace, so",2],["kill_child","Resque::Worker","classes/Resque/Worker.html#M000095","()","Kills the forked child immediately, without remorse. The job it is processing will not be completed.",2],["list_range","Resque","classes/Resque.html#M000075","(key, start = 0, count = 1)","Does the dirty work of fetching a range of items from a Redis list and converting them into Ruby objects.",2],["log","Resque::Failure::Base","classes/Resque/Failure/Base.html#M000006","(message)","Logging! ",2],["log","Resque::Worker","classes/Resque/Worker.html#M000118","(message)","Log a message to STDOUT if we are verbose or very_verbose. ",2],["log!","Resque::Worker","classes/Resque/Worker.html#M000119","(message)","Logs a very verbose message to STDOUT. ",2],["new","Resque::Failure::Base","classes/Resque/Failure/Base.html#M000000","(exception, worker, queue, payload)","",2],["new","Resque::Job","classes/Resque/Job.html#M000030","(queue, payload)","",2],["new","Resque::Worker","classes/Resque/Worker.html#M000070","(*queues)","Workers should be initialized with an array of string queue names. The order is important: a Worker will",2],["partial","Resque::Server","classes/Resque/Server.html#M000050","(template, local_vars = {})","",2],["partial?","Resque::Server","classes/Resque/Server.html#M000049","()","",2],["path_prefix","Resque::Server","classes/Resque/Server.html#M000043","()","",2],["payload_class","Resque::Job","classes/Resque/Job.html#M000034","()","Returns the actual class constant represented in this job's payload. ",2],["peek","Resque","classes/Resque.html#M000074","(queue, start = 0, count = 1)","Returns an array of items currently queued. Queue name should be a string. start and count should be",2],["perform","Resque::Job","classes/Resque/Job.html#M000033","()","Attempts to perform the work represented by this job instance. Calls #perform on the class given in the",2],["poll","Resque::Server","classes/Resque/Server.html#M000051","()","",2],["pop","Resque","classes/Resque.html#M000072","(queue)","Pops a job off a queue. Queue name should be a string. Returns a Ruby object. ",2],["process","Resque::Worker","classes/Resque/Worker.html#M000081","(job = nil)","Processes a single job. If none is given, it will try to produce one. ",2],["processed","Resque::Worker","classes/Resque/Worker.html#M000101","()","How many jobs has this worker processed? Returns an int. ",2],["processed!","Resque::Worker","classes/Resque/Worker.html#M000102","()","Tell Redis we've processed a job. ",2],["processing","Resque::Worker","classes/Resque/Worker.html#M000108","()","Alias for #job",2],["prune_dead_workers","Resque::Worker","classes/Resque/Worker.html#M000096","()","Looks for any workers which should be running on this server and, if they're not, removes them from Redis.",2],["push","Resque","classes/Resque.html#M000069","(queue, item)","Pushes a job onto a queue. Queue name should be a string and the item should be any JSON-able Ruby object.",2],["queues","Resque","classes/Resque.html#M000077","()","Returns an array of all known Resque queues as strings. ",2],["queues","Resque::Worker","classes/Resque/Worker.html#M000087","()","Returns a list of queues to use when searching for a job. A splat (\"*\") means you want every queue (in",2],["recreate","Resque::Job","classes/Resque/Job.html#M000037","()","Creates an identical job, essentially placing this job back on the queue. ",2],["redis","Resque","classes/Resque.html#M000067","()","Returns the current Redis connection. If none has been created, will create a new one. ",2],["redis","Resque::Helpers","classes/Resque/Helpers.html#M000019","()","Direct access to the Redis instance. ",2],["redis=","Resque","classes/Resque.html#M000062","(server)","Accepts a 'hostname:port' string or a Redis server. ",2],["redis_get_size","Resque::Server","classes/Resque/Server.html#M000046","(key)","",2],["redis_get_value_as_array","Resque::Server","classes/Resque/Server.html#M000047","(key)","",2],["register_signal_handlers","Resque::Worker","classes/Resque/Worker.html#M000092","()","Registers the various signal handlers a worker responds to. TERM: Shutdown immediately, stop processing",2],["register_worker","Resque::Worker","classes/Resque/Worker.html#M000097","()","Registers ourself as a worker. Useful when entering the worker lifecycle on startup. ",2],["remove_queue","Resque","classes/Resque.html#M000078","(queue)","Given a queue name, completely deletes the queue. ",2],["reserve","Resque","classes/Resque.html#M000082","(queue)","This method will return a `Resque::Job` object or a non-true value depending on whether a job can be",2],["reserve","Resque::Job","classes/Resque/Job.html#M000032","(queue)","Given a string queue name, returns an instance of Resque::Job if any jobs are available. If not, returns",2],["reserve","Resque::Worker","classes/Resque/Worker.html#M000086","()","Attempts to grab a job off one of the provided queues. Returns nil if no job can be found. ",2],["resque","Resque::Server","classes/Resque/Server.html#M000060","()","",2],["save","Resque::Failure::Base","classes/Resque/Failure/Base.html#M000001","()","When a job fails, a new instance of your Failure backend is created and #save is called. This is where",2],["save","Resque::Failure::Hoptoad","classes/Resque/Failure/Hoptoad.html#M000010","()","",2],["save","Resque::Failure::Redis","classes/Resque/Failure/Redis.html#M000011","()","",2],["send_to_hoptoad","Resque::Failure::Hoptoad","classes/Resque/Failure/Hoptoad.html#M000012","(data)","",2],["show","Resque::Server","classes/Resque/Server.html#M000052","(page, layout = true)","",2],["show_args","Resque::Server","classes/Resque/Server.html#M000048","(args)","",2],["shutdown","Resque::Worker","classes/Resque/Worker.html#M000093","()","Schedule this worker for shutdown. Will finish processing the current job. ",2],["shutdown!","Resque::Worker","classes/Resque/Worker.html#M000094","()","Kill the child and shutdown immediately. ",2],["size","Resque","classes/Resque.html#M000073","(queue)","Returns an int representing the size of a queue. Queue name should be a string. ",2],["started","Resque::Worker","classes/Resque/Worker.html#M000105","()","What time did this worker start? Returns an instance of `Time` ",2],["started!","Resque::Worker","classes/Resque/Worker.html#M000106","()","Tell Redis we've started ",2],["startup","Resque::Worker","classes/Resque/Worker.html#M000089","()","Runs all the methods needed when a worker begins its lifecycle. ",2],["state","Resque::Worker","classes/Resque/Worker.html#M000111","()","Returns a symbol representing the current worker state, which can be either :working or :idle ",2],["tab","Resque::Server","classes/Resque/Server.html#M000045","(name)","",2],["to_s","Resque","classes/Resque.html#M000068","()","",2],["to_s","Resque::Worker","classes/Resque/Worker.html#M000114","()","The string representation is the same as the id for this worker instance. Can be used with `Worker.find`.",2],["unregister_worker","Resque::Worker","classes/Resque/Worker.html#M000098","()","Unregisters ourself as a worker. Useful when shutting down. ",2],["url","Resque::Failure","classes/Resque/Failure.html#M000028","()","The string url of the backend's web interface, if any. ",2],["url","Resque::Failure::Base","classes/Resque/Failure/Base.html#M000004","()","A URL where someone can go to view failures. ",2],["url","Resque::Failure::Hoptoad","classes/Resque/Failure/Hoptoad.html#M000007","()","",2],["url","Resque::Server","classes/Resque/Server.html#M000042","(*path_parts)","",2],["use_ssl?","Resque::Failure::Hoptoad","classes/Resque/Failure/Hoptoad.html#M000015","()","",2],["validate_queues","Resque::Worker","classes/Resque/Worker.html#M000071","()","A worker must be given a queue, otherwise it won't know what to do with itself. You probably never need",2],["watch_queue","Resque","classes/Resque.html#M000079","(queue)","Used internally to keep track of which queues we've created. Don't call this directly. ",2],["work","Resque::Worker","classes/Resque/Worker.html#M000076","(interval = 5, &block)","This is the main workhorse method. Called on a Worker instance, it begins the worker life cycle. The",2],["worker_pids","Resque::Worker","classes/Resque/Worker.html#M000117","()","Returns an array of string pids of all the other workers on this machine. Useful when pruning dead workers",2],["workers","Resque","classes/Resque.html#M000083","()","A shortcut to Worker.all ",2],["working","Resque","classes/Resque.html#M000084","()","A shortcut to Worker.working ",2],["working","Resque::Worker","classes/Resque/Worker.html#M000063","()","Returns an array of all worker objects currently processing jobs. ",2],["working?","Resque::Worker","classes/Resque/Worker.html#M000109","()","Boolean - true if working, false if not ",2],["working_on","Resque::Worker","classes/Resque/Worker.html#M000099","(job)","Given a job, tells Redis we're working on it. Useful for seeing what workers are doing and when. ",2],["HISTORY.md","files/HISTORY_md.html","files/HISTORY_md.html","","## 1.2.3 (2009-12-15)  * Bugfix: Fixed `rand` seeding in child processes. * Bugfix: Better JSON encoding/decoding",3],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2009 Chris Wanstrath  Permission is hereby granted, free of charge, to any person obtaining",3],["README.markdown","files/README_markdown.html","files/README_markdown.html","","Resque ======  Resque is a Redis-backed library for creating background jobs, placing those jobs on multiple",3],["resque.rb","files/lib/resque_rb.html","files/lib/resque_rb.html","","",3],["errors.rb","files/lib/resque/errors_rb.html","files/lib/resque/errors_rb.html","","",3],["failure.rb","files/lib/resque/failure_rb.html","files/lib/resque/failure_rb.html","","",3],["base.rb","files/lib/resque/failure/base_rb.html","files/lib/resque/failure/base_rb.html","","",3],["hoptoad.rb","files/lib/resque/failure/hoptoad_rb.html","files/lib/resque/failure/hoptoad_rb.html","","",3],["redis.rb","files/lib/resque/failure/redis_rb.html","files/lib/resque/failure/redis_rb.html","","",3],["helpers.rb","files/lib/resque/helpers_rb.html","files/lib/resque/helpers_rb.html","","",3],["job.rb","files/lib/resque/job_rb.html","files/lib/resque/job_rb.html","","",3],["server.rb","files/lib/resque/server_rb.html","files/lib/resque/server_rb.html","","",3],["jquery-1.3.2.min.js","files/lib/resque/server/public/jquery-1_3_2_min_js.html","files/lib/resque/server/public/jquery-1_3_2_min_js.html","","/*  * jQuery JavaScript Library v1.3.2  * http://jquery.com/  *  * Copyright (c) 2009 John Resig  * Dual",3],["jquery.relatize_date.js","files/lib/resque/server/public/jquery_relatize_date_js.html","files/lib/resque/server/public/jquery_relatize_date_js.html","","// All credit goes to Rick Olson. (function($) {   $.fn.relatizeDate = function() {     return $(this).each(function()",3],["ranger.js","files/lib/resque/server/public/ranger_js.html","files/lib/resque/server/public/ranger_js.html","","var poll_interval = 2;  $(function() {    $('.time').relatizeDate()   $('.backtrace').click(function()",3],["reset.css","files/lib/resque/server/public/reset_css.html","files/lib/resque/server/public/reset_css.html","","html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,",3],["style.css","files/lib/resque/server/public/style_css.html","files/lib/resque/server/public/style_css.html","","html { background:#efefef; font-family:Arial, Verdana, sans-serif; font-size:13px; } body { padding:0;",3],["error.erb","files/lib/resque/server/views/error_erb.html","files/lib/resque/server/views/error_erb.html","","<h1 style=\"font-size:110%;font-family:Arial, sans-serif;\"><%= error %></h1>",3],["failed.erb","files/lib/resque/server/views/failed_erb.html","files/lib/resque/server/views/failed_erb.html","","<%start = params[:start].to_i %> <%failed = Resque::Failure.all(start, 20)%>  <h1>Failed Jobs</h1> <%unless",3],["key.erb","files/lib/resque/server/views/key_erb.html","files/lib/resque/server/views/key_erb.html","","<% if key = params[:key] %>    <h1>Key \"<%= key %>\" is a <%= resque.redis.type key %></h1>   <h2>size:",3],["layout.erb","files/lib/resque/server/views/layout_erb.html","files/lib/resque/server/views/layout_erb.html","","<!DOCTYPE html> <html> <head>   <title>Resque.</title>   <link href=\"<%=u 'reset.css' %>\" media=\"screen\"",3],["next_more.erb","files/lib/resque/server/views/next_more_erb.html","files/lib/resque/server/views/next_more_erb.html","","<%if  start - 20 >= 0 || start + 20 <= size%> <p class='pagination'>   <% if start - 20 >= 0 %>     <a",3],["overview.erb","files/lib/resque/server/views/overview_erb.html","files/lib/resque/server/views/overview_erb.html","","<%= partial :queues %> <hr /> <%= partial :working %> <%= poll %> ",3],["queues.erb","files/lib/resque/server/views/queues_erb.html","files/lib/resque/server/views/queues_erb.html","","<% @subtabs = resque.queues unless partial? %>  <% if queue = params[:id] %>    <h1>Pending jobs on <span",3],["stats.erb","files/lib/resque/server/views/stats_erb.html","files/lib/resque/server/views/stats_erb.html","","<% @subtabs = %w( resque redis keys ) %>  <% if params[:key] %>  <%= partial :key %>  <% elsif params[:id]",3],["workers.erb","files/lib/resque/server/views/workers_erb.html","files/lib/resque/server/views/workers_erb.html","","<% if params[:id] && worker = Resque::Worker.find(params[:id]) %>    <h1>Worker <%= worker %></h1>  ",3],["working.erb","files/lib/resque/server/views/working_erb.html","files/lib/resque/server/views/working_erb.html","","<% if params[:id] && (worker = Resque::Worker.find(params[:id])) && worker.job %>   <h1><%= worker %>'s",3],["stat.rb","files/lib/resque/stat_rb.html","files/lib/resque/stat_rb.html","","",3],["tasks.rb","files/lib/resque/tasks_rb.html","files/lib/resque/tasks_rb.html","","require 'resque/tasks' will give you the resque tasks ",3],["version.rb","files/lib/resque/version_rb.html","files/lib/resque/version_rb.html","","",3],["worker.rb","files/lib/resque/worker_rb.html","files/lib/resque/worker_rb.html","","",3]]}}