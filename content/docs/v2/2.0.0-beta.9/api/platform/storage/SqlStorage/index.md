---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.9"
versionHref: "/docs/v2/2.0.0-beta.9"
path: ""
category: api
id: "sqlstorage"
title: "SqlStorage"
header_sub_title: "Ionic API Documentation"
doc: "SqlStorage"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="sql-storage" href="#sql-storage"></a>

SqlStorage





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/platform/storage/sql.ts#L5">
Improve this doc
</a>






<p>SqlStorage uses SQLite or WebSQL (development only!) to store data in a
persistent SQL store on the filesystem.</p>
<p>This is the preferred storage engine, as data will be stored in appropriate
app storage, unlike Local Storage which is treated differently by the OS.</p>
<p>For convenience, the engine supports key/value storage for simple get/set and blob
storage. The full SQL engine is exposed underneath through the <code>query</code> method.</p>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-js">let storage = new Storage(SqlStorage, options);
storage.set(&#39;name&#39;, &#39;Max&#39;);
storage.get(&#39;name&#39;).then((name) =&gt; {
});

// Sql storage also exposes the full engine underneath
storage.query(&#39;insert into projects(name, data) values(&quot;Cool Project&quot;, &quot;blah&quot;)&#39;);
storage.query(&#39;select * from projects&#39;).then((resp) =&gt; {})
</code></pre>
<p>The <code>SqlStorage</code> service supports these options:
{
  name: the name of the database (__ionicstorage by default)
  backupFlag: // where to store the file, default is BACKUP_LOCAL which DOES NOT store to iCloud. Other options: BACKUP_LIBRARY, BACKUP_DOCUMENTS
  existingDatabase: whether to load this as an existing database (default is false)
}</p>




<!-- @property tags -->
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<div id="BACKUP_LOCAL"></div>
<h3><a class="anchor" name="BACKUP_LOCAL" href="#BACKUP_LOCAL"></a><code>BACKUP_LOCAL()</code>
  
</h3>











<div id="BACKUP_LIBRARY"></div>
<h3><a class="anchor" name="BACKUP_LIBRARY" href="#BACKUP_LIBRARY"></a><code>BACKUP_LIBRARY()</code>
  
</h3>











<div id="BACKUP_DOCUMENTS"></div>
<h3><a class="anchor" name="BACKUP_DOCUMENTS" href="#BACKUP_DOCUMENTS"></a><code>BACKUP_DOCUMENTS()</code>
  
</h3>













<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="query"></div>

<h3>
<a class="anchor" name="query" href="#query"></a>
<code>query(query,&nbsp;params)</code>
  

</h3>

Perform an arbitrary SQL operation on the database. Use this method
to have full control over the underlying database through SQL operations
like SELECT, INSERT, and UPDATE.



<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        query
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the query to run</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        params
        
        
      </td>
      <td>
        
  <code>array</code>
      </td>
      <td>
        <p>the additional params to use for query placeholders</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}</p>


</div>




<div id="get"></div>

<h3>
<a class="anchor" name="get" href="#get"></a>
<code>get(key)</code>
  

</h3>

Get the value in the database identified by the given key.


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}</p>


</div>




<div id="set"></div>

<h3>
<a class="anchor" name="set" href="#set"></a>
<code>set(key,&nbsp;value)</code>
  

</h3>

Set the value in the database for the given key. Existing values will be overwritten.


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The value (as a string)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}</p>


</div>




<div id="remove"></div>

<h3>
<a class="anchor" name="remove" href="#remove"></a>
<code>remove(key)</code>
  

</h3>

Remove the value in the database for the given key.


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}</p>


</div>




<div id="clear"></div>

<h3>
<a class="anchor" name="clear" href="#clear"></a>
<code>clear()</code>
  

</h3>

Clear all keys/values of your database.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}</p>


</div>





<!-- related link --><!-- end content block -->


<!-- end body block -->

